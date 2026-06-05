import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccueilPage from '../pages/AccueilPage'
import ExpositionPage from '../pages/ExpositionPage'
import InscriptionPage from '../pages/InscriptionPage'
import AjouterProduitPage from '../pages/AjouterProduitPage'
import ConnexionPage from '../pages/ConnexionPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/exposition" element={<ExpositionPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/ajouter-produit" element={<AjouterProduitPage />} />
        <Route path="/connexion" element={<ConnexionPage />} />
      </Routes>
    </BrowserRouter>
  )
}
