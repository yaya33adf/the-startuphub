import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LocationPeriodSelectProps {
  country: string;
  setCountry: (country: string) => void;
  period: string;
  setPeriod: (period: string) => void;
}

const countries = [
  { value: "global", label: "Global" },
  { value: "af", label: "Afghanistan" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "ar", label: "Argentina" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "bd", label: "Bangladesh" },
  { value: "be", label: "Belgium" },
  { value: "br", label: "Brazil" },
  { value: "ca", label: "Canada" },
  { value: "cl", label: "Chile" },
  { value: "cn", label: "China" },
  { value: "co", label: "Colombia" },
  { value: "cz", label: "Czech Republic" },
  { value: "dk", label: "Denmark" },
  { value: "eg", label: "Egypt" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "gr", label: "Greece" },
  { value: "hk", label: "Hong Kong" },
  { value: "hu", label: "Hungary" },
  { value: "in", label: "India" },
  { value: "id", label: "Indonesia" },
  { value: "ir", label: "Iran" },
  { value: "iq", label: "Iraq" },
  { value: "ie", label: "Ireland" },
  { value: "il", label: "Israel" },
  { value: "it", label: "Italy" },
  { value: "jp", label: "Japan" },
  { value: "jo", label: "Jordan" },
  { value: "ke", label: "Kenya" },
  { value: "kr", label: "South Korea" },
  { value: "kw", label: "Kuwait" },
  { value: "my", label: "Malaysia" },
  { value: "mx", label: "Mexico" },
  { value: "ma", label: "Morocco" },
  { value: "nl", label: "Netherlands" },
  { value: "nz", label: "New Zealand" },
  { value: "ng", label: "Nigeria" },
  { value: "no", label: "Norway" },
  { value: "pk", label: "Pakistan" },
  { value: "pe", label: "Peru" },
  { value: "ph", label: "Philippines" },
  { value: "pl", label: "Poland" },
  { value: "pt", label: "Portugal" },
  { value: "qa", label: "Qatar" },
  { value: "ro", label: "Romania" },
  { value: "ru", label: "Russia" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "sg", label: "Singapore" },
  { value: "za", label: "South Africa" },
  { value: "es", label: "Spain" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
  { value: "tw", label: "Taiwan" },
  { value: "th", label: "Thailand" },
  { value: "tr", label: "Turkey" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "vn", label: "Vietnam" },
];

const periods = [
  { value: "1d", label: "Last 24 hours" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "12m", label: "Last 12 months" },
];

export const LocationPeriodSelect = ({
  country,
  setCountry,
  period,
  setPeriod,
}: LocationPeriodSelectProps) => {
  return (
    <>
      <Select value={country} onValueChange={setCountry}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={period} onValueChange={setPeriod}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          {periods.map((period) => (
            <SelectItem key={period.value} value={period.value}>
              {period.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};