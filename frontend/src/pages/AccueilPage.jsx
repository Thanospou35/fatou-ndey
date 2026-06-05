import PageLayout from '../components/layout/PageLayout'
import Carousel from '../components/home/Carousel'
import { images } from '../data/images'

export default function AccueilPage() {
  return (
    <PageLayout>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-sm leading-relaxed sm:text-base">
          <p>
            Bienvenue sur notre application web conçue pour augmenter la visibilité des PME et
            artisans locaux. Notre objectif est de vous permettre de mettre en avant et de vendre
            vos produits sur le marché national.
          </p>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">Nos objectifs</h2>
          <div className="space-y-4 text-sm leading-relaxed sm:text-base">
            <p>
              Aider les PME et artisans dans la transformation des produits agricoles, promouvoir la
              consommation locale et digitaliser la recherche de produits fabriqués au Sénégal.
            </p>
            <p className="font-bold">
              Exploitez la puissance de la digitalisation pour trouver les entreprises dont vous
              avez besoin.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <Carousel />
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-sm sm:text-base">
          <p className="font-bold">
            Pourquoi aidez nos PME dans la transformation des produits agricoles ?
          </p>
          <p className="font-bold">
            En les soutenant, vous soutenez la consommation locale et l&apos;économie sénégalaise.
          </p>
          <p>
            Vous pouvez rechercher des produits et passer des commandes en toute sécurité en
            contactant directement les entreprises.
          </p>
          <img
            src={images.home.rechercheProduits}
            alt="Recherche de produits locaux sénégalais"
            className="mt-6 h-40 w-full rounded-2xl object-cover sm:h-52"
            loading="lazy"
          />
        </div>
      </section>
    </PageLayout>
  )
}
