import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import CookiePolicy from './pages/CookiePolicy';
import Methodology from './pages/Methodology';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';

// 14 Individual Statutory Calculators
import SipCalculator from './pages/SipCalculator';
import StepUpSipCalculator from './pages/StepUpSipCalculator';
import LoanEmiCalculator from './pages/LoanEmiCalculator';
import IncomeTaxCalculator from './pages/IncomeTaxCalculator';
import PpfCalculator from './pages/PpfCalculator';
import InflationCalculator from './pages/InflationCalculator';
import FdCalculator from './pages/FdCalculator';
import RdCalculator from './pages/RdCalculator';
import CagrCalculator from './pages/CagrCalculator';
import NpsCalculator from './pages/NpsCalculator';
import HraCalculator from './pages/HraCalculator';
import GratuityCalculator from './pages/GratuityCalculator';
import CapitalGainsCalculator from './pages/CapitalGainsCalculator';
import Section44adaCalculator from './pages/Section44adaCalculator';

// Supporting Research Guides & Articles Hub
import ArticlesIndex from './pages/ArticlesIndex';
import HowLoanEmiIsCalculated from './pages/articles/HowLoanEmiIsCalculated';
import SipVsLumpSum from './pages/articles/SipVsLumpSum';
import StepUpSipGuide from './pages/articles/StepUpSipGuide';
import NewVsOldTaxRegime from './pages/articles/NewVsOldTaxRegime';
import InflationErosionGuide from './pages/articles/InflationErosionGuide';
import PpfInterestGuide from './pages/articles/PpfInterestGuide';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* 14 Distinct Statutory Calculators */}
            <Route path="/sip-calculator" element={<SipCalculator />} />
            <Route path="/step-up-sip-calculator" element={<StepUpSipCalculator />} />
            <Route path="/loan-emi-calculator" element={<LoanEmiCalculator />} />
            <Route path="/income-tax-calculator" element={<IncomeTaxCalculator />} />
            <Route path="/ppf-calculator" element={<PpfCalculator />} />
            <Route path="/inflation-adjusted-return-calculator" element={<InflationCalculator />} />
            <Route path="/fd-calculator" element={<FdCalculator />} />
            <Route path="/rd-calculator" element={<RdCalculator />} />
            <Route path="/cagr-calculator" element={<CagrCalculator />} />
            <Route path="/nps-calculator" element={<NpsCalculator />} />
            <Route path="/hra-calculator" element={<HraCalculator />} />
            <Route path="/gratuity-calculator" element={<GratuityCalculator />} />
            <Route path="/capital-gains-tax-calculator" element={<CapitalGainsCalculator />} />
            <Route path="/section-44ada-calculator" element={<Section44adaCalculator />} />

            {/* In-Depth Educational Research & Articles */}
            <Route path="/articles" element={<ArticlesIndex />} />
            <Route path="/articles/how-loan-emi-is-calculated" element={<HowLoanEmiIsCalculated />} />
            <Route path="/articles/sip-vs-lump-sum-investing" element={<SipVsLumpSum />} />
            <Route path="/articles/step-up-sip-wealth-accelerator" element={<StepUpSipGuide />} />
            <Route path="/articles/new-vs-old-tax-regime" element={<NewVsOldTaxRegime />} />
            <Route path="/articles/understanding-real-vs-nominal-returns" element={<InflationErosionGuide />} />
            <Route path="/articles/ppf-rules-interest-calculation-guide" element={<PpfInterestGuide />} />

            {/* Governance & Authority */}
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
