import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidator = 0;

const HomePage = async () => {
    const billboard = await getBillboard("e5d43e61-e8f7-47c7-a27e-955bb1aa16e7");

  return (
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
        </div>
    </Container>
  )
}

export default HomePage;