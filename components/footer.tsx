export default function Footer() {
  return (
    <div className="bg-neutral-100 text-gray-800 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center ">
        <p className="font-light">
          &copy; 2023 4CO. Todos os direitos reservados.
        </p>
        <div className="flex space-x-1">
          <p>desenvolvido por</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luisjulio6/"
            className="underline text-[#84AF00] hover:text-[#84AF00]/80 transition-colors duration-200"
          >
            Luis Julio
          </a>
        </div>
      </div>
    </div>
  );
}
