const Index = () => {
  return (
    <nav className="py-3" aria-label="breadcrumb">
      <ol className="breadcrumb flex flex-wrap gap-2">
        <li className="text-[#1E2256]/50 text-body-14 font-normal breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="text-[#1E2256]/50 text-body-14 font-normal breadcrumb-item before:mr-2 before:content-['/']">
          <a href="/enterprises">Imóveis</a>
        </li>
        <li
          className="text-body-14 font-normal breadcrumb-item before:mr-2 before:content-['/'] active"
          aria-current="page"
        >
          <span className="font-semibold text-[#1E2256]">Pluri Pinheiros</span>
        </li>
      </ol>
    </nav>
  );
};

export default Index;
