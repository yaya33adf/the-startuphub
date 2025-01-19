import React, { useState } from 'react';
import { Shuffle, Filter, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const StartupIdeaGenerator = () => {
  const industries = [
    'Healthcare', 'Education', 'Finance', 'Retail', 'Transportation',
    'Entertainment', 'Food & Beverage', 'Real Estate', 'Technology', 'Energy',
    'Fashion', 'Sports', 'Travel', 'Manufacturing', 'Agriculture'
  ];

  const technologies = [
    'AI', 'Blockchain', 'IoT', 'AR/VR', 'Cloud Computing',
    'Machine Learning', '5G', 'Robotics', 'Big Data', 'Quantum Computing',
    'Green Tech', 'Biotechnology', 'Cybersecurity', '3D Printing', 'Drones'
  ];

  const problems = [
    'Efficiency', 'Accessibility', 'Sustainability', 'Cost Reduction', 'User Experience',
    'Safety', 'Communication', 'Automation', 'Quality Control', 'Resource Management',
    'Data Privacy', 'Waste Reduction', 'Time Management', 'Learning', 'Healthcare'
  ];

  const targetUsers = [
    'Small Businesses', 'Students', 'Remote Workers', 'Parents', 'Elderly',
    'Professionals', 'Travelers', 'Athletes', 'Artists', 'Healthcare Providers',
    'Teachers', 'Pet Owners', 'Urban Dwellers', 'Rural Communities', 'Retailers'
  ];

  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('');

  const generateRandom = () => {
    setSelectedIndustry(industries[Math.floor(Math.random() * industries.length)]);
    setSelectedTech(technologies[Math.floor(Math.random() * technologies.length)]);
    setSelectedProblem(problems[Math.floor(Math.random() * problems.length)]);
    setSelectedTarget(targetUsers[Math.floor(Math.random() * targetUsers.length)]);
  };

  const generateDescription = () => {
    if (!selectedIndustry) return 'Click "Generate Idea" to start!';
    return `A ${selectedTech}-powered solution in the ${selectedIndustry} industry, focusing on ${selectedProblem} for ${selectedTarget}.`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="text-blue-500" />
            Startup Idea Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Filter className="text-green-500" />
                Generated Components
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <TrendingUp className="text-blue-400" />
                  <div>
                    <span className="text-gray-600">Industry:</span>
                    <br />
                    <span className="font-semibold">{selectedIndustry || '...'}</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Target className="text-purple-400" />
                  <div>
                    <span className="text-gray-600">Technology:</span>
                    <br />
                    <span className="font-semibold">{selectedTech || '...'}</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Lightbulb className="text-yellow-400" />
                  <div>
                    <span className="text-gray-600">Problem Focus:</span>
                    <br />
                    <span className="font-semibold">{selectedProblem || '...'}</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Target className="text-red-400" />
                  <div>
                    <span className="text-gray-600">Target Users:</span>
                    <br />
                    <span className="font-semibold">{selectedTarget || '...'}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Generated Idea Description:</h4>
              <p>{generateDescription()}</p>
            </div>
            
            <button
              onClick={generateRandom}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Shuffle />
              Generate New Idea
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">How to Use This Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2">
            <li>• Click "Generate New Idea" for a complete new concept</li>
            <li>• Consider how different combinations might create unique opportunities</li>
            <li>• Use the generated description as a starting point for your business concept</li>
            <li>• Research market potential and existing solutions in the generated space</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};