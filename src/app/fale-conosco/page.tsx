import Container from "@/components/Container/Index";
import FaleConosco from "@/components/FaleConosco/Index";
import FAB from "@/components/FAB/Index";

const Index = () => {
  return (
    <main className="">
      <Container>
        <nav className="py-3" aria-label="breadcrumb">
          <ol className="breadcrumb flex flex-wrap gap-2">
            <li className="text-[#1E2256]/50 text-body-14 font-normal breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li
              className="text-body-14 font-normal breadcrumb-item before:mr-2 before:content-['/'] active"
              aria-current="page"
            >
              <span className="font-normal text-[#1E2256]">Fale Conosco</span>
            </li>
          </ol>
        </nav>
      </Container>

      <Container>
        <div className="flex flex-col @desktop:justify-between space-y-5 mb-0">
          <p className="text-[40px] font-normal text-[#1E2256]">
            Fale Conosco
          </p>
        </div>
      </Container>

      <Container>
        <FaleConosco />
      </Container>
    </main>
  );
};

export default Index;
