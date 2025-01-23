import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

interface CertificatesInputProps {
  certificates: Certificate[];
  onCertificatesChange: (certificates: Certificate[]) => void;
}

export function CertificatesInput({ certificates, onCertificatesChange }: CertificatesInputProps) {
  const [newCert, setNewCert] = useState<Certificate>({ name: "", issuer: "", date: "" });

  const addCertificate = () => {
    if (newCert.name && newCert.issuer) {
      onCertificatesChange([...certificates, newCert]);
      setNewCert({ name: "", issuer: "", date: "" });
    }
  };

  const removeCertificate = (index: number) => {
    const updatedCerts = certificates.filter((_, i) => i !== index);
    onCertificatesChange(updatedCerts);
  };

  return (
    <div className="space-y-4">
      <Label>Certificates</Label>
      
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="flex items-center gap-2 p-2 border rounded-md">
            <div className="flex-1">
              <p className="font-medium">{cert.name}</p>
              <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeCertificate(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Certificate name"
            value={newCert.name}
            onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
          />
          <Input
            placeholder="Issuing organization"
            value={newCert.issuer}
            onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
          />
        </div>
        <Input
          type="date"
          value={newCert.date}
          onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
        />
        <Button onClick={addCertificate} type="button">Add Certificate</Button>
      </div>
    </div>
  );
}