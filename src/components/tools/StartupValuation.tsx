import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, BarChart, Users, Rocket, Target, Award } from 'lucide-react';

export const StartupValuation = () => {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    monthlyGrowthRate: '',
    grossMargin: '',
    marketSize: '',
    marketGrowthRate: '',
    competitorCount: '',
    teamSize: '',
    founderExperience: '',
    hasPrototype: 'no',
    hasPatents: 'no',
    monthlyActiveUsers: '',
    customerCount: ''
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateRevenueMultiple = () => {
    let multiple = 5;
    const monthlyGrowth = parseFloat(inputs.monthlyGrowthRate) || 0;
    if (monthlyGrowth > 15) multiple += 3;
    else if (monthlyGrowth > 10) multiple += 2;
    else if (monthlyGrowth > 5) multiple += 1;

    const margin = parseFloat(inputs.grossMargin) || 0;
    if (margin > 80) multiple += 2;
    else if (margin > 60) multiple += 1;

    return multiple;
  };

  const calculateScorecardValuation = () => {
    let score = 0;
    const baseValuation = 1000000;

    score += (parseInt(inputs.founderExperience) || 0) * 0.3;
    const marketSize = parseFloat(inputs.marketSize) || 0;
    score += (marketSize > 1000 ? 1 : marketSize/1000) * 0.25;
    score += (inputs.hasPrototype === 'yes' ? 0.15 : 0) +
             (inputs.hasPatents === 'yes' ? 0.10 : 0);
    const users = parseInt(inputs.monthlyActiveUsers) || 0;
    score += (users > 10000 ? 0.2 : users/50000);

    return baseValuation * (1 + score);
  };

  const calculateGrowthBasedValuation = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const monthlyGrowth = parseFloat(inputs.monthlyGrowthRate) || 0;
    const annualizedGrowth = Math.pow(1 + monthlyGrowth/100, 12) - 1;
    return revenue * (1 + annualizedGrowth) * 3;
  };

  const calculateValuation = () => {
    const revenueMultiple = calculateRevenueMultiple();
    const revenueValuation = (parseFloat(inputs.annualRevenue) || 0) * revenueMultiple;
    const scorecardValuation = calculateScorecardValuation();
    const growthValuation = calculateGrowthBasedValuation();

    const finalValuation = (revenueValuation * 0.4) + 
                         (scorecardValuation * 0.3) + 
                         (growthValuation * 0.3);

    setResults({
      finalValuation,
      revenueValuation,
      scorecardValuation,
      growthValuation,
      multiple: revenueMultiple
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const renderInputField = (label, name, type = "number", prefix = null) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={inputs[name]}
          onChange={handleInputChange}
          className={`w-full p-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-100 transition-all ${prefix ? 'pl-8' : ''}`}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-lg">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold">Startup Valuation Calculator</h1>
          </div>
          <p className="text-blue-100 max-w-2xl">
            Calculate your startup's valuation using multiple methodologies including revenue multiples,
            scorecard method, and growth-based projections.
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-blue-100 hover:border-blue-300 transition-all duration-300 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Financial Metrics</h3>
              </div>
              <div className="space-y-4">
                {renderInputField("Annual Revenue", "annualRevenue", "number", "$")}
                {renderInputField("Monthly Growth Rate (%)", "monthlyGrowthRate")}
                {renderInputField("Gross Margin (%)", "grossMargin")}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-purple-100 hover:border-purple-300 transition-all duration-300 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Market & Competition</h3>
              </div>
              <div className="space-y-4">
                {renderInputField("Market Size (Millions)", "marketSize")}
                {renderInputField("Market Growth Rate (%)", "marketGrowthRate")}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-green-100 hover:border-green-300 transition-all duration-300 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Team & Product</h3>
              </div>
              <div className="space-y-4">
                {renderInputField("Founder Experience (Years)", "founderExperience")}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Has Working Prototype?
                  </label>
                  <select
                    name="hasPrototype"
                    value={inputs.hasPrototype}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-100 transition-all"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Has Patents?
                  </label>
                  <select
                    name="hasPatents"
                    value={inputs.hasPatents}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-100 transition-all"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-orange-100 hover:border-orange-300 transition-all duration-300 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Traction</h3>
              </div>
              <div className="space-y-4">
                {renderInputField("Monthly Active Users", "monthlyActiveUsers")}
                {renderInputField("Paying Customers", "customerCount")}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={calculateValuation}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg"
            >
              <Calculator className="w-6 h-6" />
              Calculate Valuation
            </button>
          </div>

          {results && (
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Award className="text-blue-600" />
                Valuation Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-gray-600 mb-2">Final Valuation</div>
                  <div className="text-4xl font-bold text-blue-600">
                    {formatCurrency(results.finalValuation)}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Based on weighted average</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-gray-600 mb-2">Revenue Multiple</div>
                  <div className="text-4xl font-bold text-purple-600">
                    {results.multiple.toFixed(1)}x
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Industry adjusted</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}