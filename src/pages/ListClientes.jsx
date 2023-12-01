import NavbarPizzaRuth from "../components/NavbarPizzaRuth";
import Grid from "../components/Grid.jsx"

export default function ListClientes() {
  return(
    <main>
      <NavbarPizzaRuth/>
      <section className="pt-24 md:pt-36">
        <Grid/>
      </section>
    </main>
  )
}