import { GoToTop } from '@/components/GoToTop'
import { Hero } from '@/components/Hero'
import { AboutUs } from '@/components/AboutUS'
import { WeDo } from '@/components/WeDo'
import { OurMethodology } from '@/components/OurMethodology'
import { Contact } from '@/components/Contact'

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen w-screen flex-col gap-80 overflow-x-hidden">
				<Hero />

				<AboutUs />

				<WeDo />

				<OurMethodology />

				<Contact />
			</main>

			<GoToTop />
		</>
	)
}
