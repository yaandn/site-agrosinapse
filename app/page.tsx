import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Activity,
  BarChart3,
  Brain,
  Bug,
  ChevronRight,
  CloudRain,
  Cpu,
  Facebook,
  FileBarChart,
  Instagram,
  Layers,
  Linkedin,
  LineChart,
  Menu,
  Microscope,
  TreesIcon as Plant,
  Scan,
  ScanLine,
  SproutIcon as Seedling,
  X,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-zinc-900 text-white dark:bg-gradient-to-b dark:from-black dark:to-zinc-900 light:bg-white light:text-zinc-900 transition-theme">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-green-900/20 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30 light:bg-white light:border-gray-200 light:shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-green-500 blur-sm opacity-70 light:opacity-50"></div>
              <Plant className="relative h-8 w-8 text-white dark:text-white light:text-green-700" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 dark:from-green-400 dark:to-emerald-600 light:from-green-600 light:to-emerald-700">
              AgroSinapse
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Sobre
            </Link>
            <Link
              href="#solucoes"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Soluções
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:flex bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800 light:text-white">
              Fale conosco
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-green-800 text-green-400 light:border-green-600 light:text-green-600"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-100"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-100"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-green-400/10 rounded-full blur-2xl dark:bg-green-400/10 light:bg-green-50"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                  <Cpu className="mr-1 h-3 w-3" /> Tecnologia de ponta para o
                  agronegócio
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                  Inteligência Artificial no Campo
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400 light:text-gray-600">
                  Análises inteligentes para decisões mais precisas na lavoura,
                  potencializando sua produtividade com tecnologia de ponta.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 h-12 px-6 dark:from-green-500 dark:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-700 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800">
                    Conheça o AgroSinapse
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link className="decoration-none" href="#parceria">
                    <Button
                      variant="outline"
                      className="border-green-500/30 text-green-400 hover:bg-green-500/10 h-12 px-6 dark:border-green-500/30 dark:text-green-400 dark:hover:bg-green-500/10 light:border-green-600/30 light:text-green-600 light:hover:bg-green-500/10"
                    >
                      Seja um parceiro
                    </Button>
                  </Link>
                </div>

                {/* <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-black bg-zinc-800 dark:border-black dark:bg-zinc-800 light:border-white light:bg-gray-200"
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                    <span className="font-medium text-green-400 dark:text-green-400 light:text-green-600">
                      +500
                    </span>{" "}
                    produtores rurais confiam em nós
                  </p>
                </div> */}
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-2xl dark:bg-green-500/20 light:bg-green-500/30"></div>
                <div className="relative rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-1 overflow-hidden dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40">
                  <Image
                    src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="Dashboard AgroSinapse"
                    className="rounded-xl object-cover w-full"
                  />

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm p-2 text-xs text-green-400 flex items-center dark:border-green-500/30 dark:bg-black/60 dark:text-green-400 light:border-green-600/30 light:bg-white/60 light:text-green-600">
                    <Activity className="mr-1 h-3 w-3" /> Análise em tempo real
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm p-2 text-xs text-green-400 flex items-center dark:border-green-500/30 dark:bg-black/60 dark:text-green-400 light:border-green-600/30 light:bg-white/60 light:text-green-600">
                    <Scan className="mr-1 h-3 w-3" /> IA processando dados
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  value: "98%",
                  label: "Precisão na detecção de pragas",
                  icon: Bug,
                },
                {
                  value: "30%",
                  label: "Aumento médio de produtividade",
                  icon: LineChart,
                },
                {
                  value: "24h",
                  label: "Monitoramento contínuo",
                  icon: Activity,
                },
                {
                  value: "5TB",
                  label: "Dados processados diariamente",
                  icon: Brain,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-green-500/20 bg-black/40 backdrop-blur-sm p-4 text-center dark:border-green-500/20 dark:bg-black/40 light:border-green-600/20 light:bg-white/40"
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-500/20">
                    <stat.icon className="h-5 w-5 text-green-400 dark:text-green-400 light:text-green-600" />
                  </div>

                  <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/20"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative order-last lg:order-first">
                <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-2xl dark:bg-green-500/20 light:bg-green-500/30"></div>
                <div className="relative rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-1 dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="Equipe AgroSinapse"
                    className="rounded-xl object-cover w-full"
                  />

                  {/* Floating elements */}
                  <div className="absolute top-4 left-4 rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm p-2 text-xs text-green-400 flex items-center dark:border-green-500/30 dark:bg-black/60 dark:text-green-400 light:border-green-600/30 light:bg-white/60 light:text-green-600">
                    <Cpu className="mr-1 h-3 w-3" /> Equipe especializada
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                  <Seedling className="mr-1 h-3 w-3" /> Nossa missão
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                  Sobre o AgroSinapse
                </h2>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
                  O AgroSinapse está atualmente em fase de desenvolvimento,
                  criando soluções digitais inovadoras voltadas para o setor
                  agrícola. Nosso foco está na análise inteligente de lavouras,
                  na identificação automatizada de pragas e na simulação de
                  cenários agronômicos. Estamos construindo uma plataforma que
                  transforma dados em insights práticos e confiáveis, com o
                  objetivo de auxiliar o produtor rural em decisões mais
                  precisas, ágeis e embasadas. Nosso compromisso é com a
                  inovação no campo, contribuindo para uma agricultura mais
                  eficiente e sustentável.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  {[
                    {
                      title: "Inovação",
                      icon: Cpu,
                      desc: "Tecnologia de ponta aplicada ao campo",
                    },
                    {
                      title: "Simplicidade",
                      icon: Layers,
                      desc: "Interface intuitiva para todos os usuários",
                    },
                    {
                      title: "Impacto",
                      icon: Plant,
                      desc: "Resultados mensuráveis na produtividade",
                    },
                  ].map((value, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-4 rounded-xl border border-green-500/20 bg-black/40 backdrop-blur-sm dark:border-green-500/20 dark:bg-black/40 light:border-green-600/20 light:bg-white/40"
                    >
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-500/20">
                        <value.icon className="h-6 w-6 text-green-400 dark:text-green-400 light:text-green-600" />
                      </div>
                      <h3 className="font-medium text-white dark:text-white light:text-green-800">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                        {value.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section
          id="solucoes"
          className="w-full py-12 md:py-24 lg:py-32 relative"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-40 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/20"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/20"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                <FileBarChart className="mr-1 h-3 w-3" /> Nossas tecnologias
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Soluções Inteligentes
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                Tecnologia avançada para potencializar seus resultados no campo
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Análise de Lavoura",
                  icon: Plant,
                  desc: "Monitoramento em tempo real da saúde das plantas, com alertas e recomendações personalizadas.",
                  features: [
                    "Mapeamento por satélite",
                    "Análise de crescimento",
                    "Previsão de colheita",
                  ],
                  link: "/solucoes/analise-de-lavoura",
                  image:
                    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Identificação de Pragas",
                  icon: Bug,
                  desc: "Detecção precoce de pragas e doenças através de imagens, com sugestões de tratamento.",
                  features: [
                    "Reconhecimento por IA",
                    "Biblioteca de pragas",
                    "Tratamentos recomendados",
                  ],
                  link: "/solucoes/identificacao-de-pragas",
                  image:
                    "https://images.unsplash.com/photo-1626810333400-5c1c6a4a8d6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Simulação de Cenários",
                  icon: Brain,
                  desc: "Previsões baseadas em IA para diferentes condições climáticas e estratégias de manejo.",
                  features: [
                    "Modelos preditivos",
                    "Análise de riscos",
                    "Otimização de recursos",
                  ],
                  link: "/solucoes/simulacao-de-cenarios",
                  image:
                    "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Análise de Solo",
                  icon: Microscope,
                  desc: "Avaliação detalhada da composição do solo para otimizar a fertilização e manejo.",
                  features: [
                    "Mapeamento de nutrientes",
                    "Recomendações de correção",
                    "Histórico de evolução",
                  ],
                  link: "/solucoes/analise-de-solo",
                  image:
                    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Gestão de Irrigação",
                  icon: CloudRain,
                  desc: "Controle inteligente da irrigação baseado em dados climáticos e necessidades da cultura.",
                  features: [
                    "Economia de água",
                    "Programação automática",
                    "Alertas de déficit hídrico",
                  ],
                  link: "/solucoes/gestao-de-irrigacao",
                  image:
                    "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Dashboard Analítico",
                  icon: BarChart3,
                  desc: "Visualização centralizada de todos os dados da propriedade para tomada de decisão.",
                  features: [
                    "Relatórios personalizados",
                    "Exportação de dados",
                    "Comparativos de safra",
                  ],
                  link: "/solucoes/dashboard-analitico",
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((solution, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm transition-all hover:border-green-500/50 hover:bg-black/60 dark:border-green-500/30 dark:bg-black/40 dark:hover:border-green-500/50 dark:hover:bg-black/60 light:border-green-600/30 light:bg-white/40 light:hover:border-green-600/50 light:hover:bg-white/60"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-green-500/20 blur-2xl group-hover:bg-green-500/30 dark:bg-green-500/20 dark:group-hover:bg-green-500/30 light:bg-green-500/30 light:group-hover:bg-green-500/40"></div>

                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 group-hover:bg-green-500/20 dark:bg-green-500/10 dark:group-hover:bg-green-500/20 light:bg-green-500/20 light:group-hover:bg-green-500/30">
                      <solution.icon className="h-6 w-6 text-green-400 dark:text-green-400 light:text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white dark:text-white light:text-green-800">
                      {solution.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                      {solution.desc}
                    </p>

                    <ul className="space-y-2">
                      {solution.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-center text-xs text-gray-400 dark:text-gray-400 light:text-gray-600"
                        >
                          <div className="mr-2 h-1 w-1 rounded-full bg-green-400 dark:bg-green-400 light:bg-green-600"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex justify-between items-center">
                      <Link href={solution.link}>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-green-400 hover:text-green-300 dark:text-green-400 dark:hover:text-green-300 light:text-green-600 light:hover:text-green-500"
                        >
                          Saiba mais
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>

                      <div className="h-8 w-8 rounded-full border border-green-500/30 flex items-center justify-center dark:border-green-500/30 light:border-green-600/30">
                        <ScanLine className="h-4 w-4 text-green-400 dark:text-green-400 light:text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Interface Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl dark:bg-green-500/5 light:bg-green-500/10"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                <Scan className="mr-1 h-3 w-3" /> Interface intuitiva
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Tecnologia ao seu alcance
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                Uma interface moderna e intuitiva para gerenciar sua lavoura
              </p>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                Uma interface moderna e intuitiva para gerenciar sua lavoura
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-3xl dark:bg-green-500/20 light:bg-green-500/30"></div>
              <div className="relative rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-2 overflow-hidden dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={1200}
                  height={600}
                  alt="Interface do AgroSinapse"
                  className="rounded-xl object-cover w-full"
                />

                {/* Floating elements */}
                <div className="absolute top-4 left-4 rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm p-2 text-xs text-green-400 flex items-center dark:border-green-500/30 dark:bg-black/60 dark:text-green-400 light:border-green-600/30 light:bg-white/60 light:text-green-600">
                  <Activity className="mr-1 h-3 w-3" /> Dashboard em tempo real
                </div>
                <div className="absolute bottom-4 right-4 rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm p-2 text-xs text-green-400 flex items-center dark:border-green-500/30 dark:bg-black/60 dark:text-green-400 light:border-green-600/30 light:bg-white/60 light:text-green-600">
                  <Brain className="mr-1 h-3 w-3" /> Análise por IA
                </div>
              </div>

              {/* Feature highlights */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Análise de Solo", icon: Microscope },
                  { label: "Detecção de Pragas", icon: Bug },
                  { label: "Previsão Climática", icon: CloudRain },
                  { label: "Relatórios Detalhados", icon: FileBarChart },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-green-500/20 bg-black/40 backdrop-blur-sm p-4 text-center dark:border-green-500/20 dark:bg-black/40 light:border-green-600/20 light:bg-white/40"
                  >
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-500/20">
                      <feature.icon className="h-5 w-5 text-green-400 dark:text-green-400 light:text-green-600" />
                    </div>
                    <div className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl dark:bg-green-500/5 light:bg-green-500/10"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl dark:bg-emerald-500/5 light:bg-emerald-500/10"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                <Activity className="mr-1 h-3 w-3" /> Resultados comprovados
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Impacto no Campo
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                O que nossos clientes dizem sobre a AgroSinapse
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Com o AgroSinapse, aumentei em 18% a produtividade da minha soja. A análise de solo e as recomendações de manejo foram precisas.",
                  name: "Carlos Mendes",
                  role: "Produtor Rural - MT",
                  metric: "18%",
                  metricLabel: "aumento de produtividade",
                },
                {
                  quote:
                    "A identificação precoce de pragas salvou minha safra de milho este ano. O sistema detectou o problema antes que se espalhasse.",
                  name: "Ana Oliveira",
                  role: "Produtora Rural - GO",
                  metric: "30%",
                  metricLabel: "redução de perdas",
                },
                {
                  quote:
                    "Tecnologia de ponta com interface simples. Até quem não é tech consegue usar. Os relatórios são claros e as recomendações práticas.",
                  name: "Roberto Almeida",
                  role: "Cooperativa Agrícola - PR",
                  metric: "40%",
                  metricLabel: "economia de insumos",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-green-500/50 hover:bg-black/60 dark:border-green-500/30 dark:bg-black/40 dark:hover:border-green-500/50 dark:hover:bg-black/60 light:border-green-600/30 light:bg-white/40 light:hover:border-green-600/50 light:hover:bg-white/60"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-green-500/10 blur-2xl group-hover:bg-green-500/20 dark:bg-green-500/10 dark:group-hover:bg-green-500/20 light:bg-green-500/20 light:group-hover:bg-green-500/30"></div>

                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-500/20">
                      <span className="text-lg font-bold text-green-400 dark:text-green-400 light:text-green-600">
                        "
                      </span>
                    </div>

                    <div className="rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm px-3 py-1 dark:border-green-500/30 dark:bg-black/60 light:border-green-600/30 light:bg-white/60">
                      <div className="text-xs font-medium text-green-400 dark:text-green-400 light:text-green-600">
                        {testimonial.metric}
                      </div>
                      <div className="text-[10px] text-gray-400 dark:text-gray-400 light:text-gray-600">
                        {testimonial.metricLabel}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-300 italic dark:text-gray-300 light:text-gray-700">
                    {testimonial.quote}
                  </p>

                  <div>
                    <p className="font-medium text-white dark:text-white light:text-green-800">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Partnership Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 relative"
          id="parceria"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-40 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/20"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/20"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                <Layers className="mr-1 h-3 w-3" /> Oportunidade de investimento
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Seja Nosso Parceiro
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                Estamos em busca de parceiros estratégicos para colaborar no
                desenvolvimento da AgroSinapse
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-green-800">
                  Por que investir ?
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Mercado em expansão",
                      desc: "O agronegócio brasileiro representa mais de 25% do PIB nacional, com crescimento constante e demanda por soluções tecnológicas.",
                      icon: LineChart,
                    },
                    {
                      title: "Tecnologia inovadora",
                      desc: "Nossa plataforma utiliza algoritmos de IA de ponta para análise de dados agrícolas, com resultados comprovados em produtividade.",
                      icon: Brain,
                    },
                    {
                      title: "Equipe especializada",
                      desc: "Contamos com profissionais experientes em tecnologia e agronegócio, combinando conhecimento técnico e prático.",
                      icon: Cpu,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-4 dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-500/20">
                          <item.icon className="h-5 w-5 text-green-400 dark:text-green-400 light:text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white dark:text-white light:text-green-800">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 ">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-green-800">
                  Oportunidades
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Investimento direto",
                      desc: "Torne-se um investidor da AgroSinapse e participe do crescimento de uma empresa inovadora no setor agro.",
                      icon: Activity,
                    },
                    {
                      title: "Parcerias estratégicas",
                      desc: "Colabore com recursos, conhecimento ou canais de distribuição para impulsionar o desenvolvimento da plataforma.",
                      icon: Layers,
                    },
                    {
                      title: "Acesso antecipado",
                      desc: "Parceiros têm acesso prioritário a novas tecnologias e funcionalidades em desenvolvimento.",
                      icon: ScanLine,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-4 dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-500/20">
                          <item.icon className="h-5 w-5 text-green-400 dark:text-green-400 light:text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white dark:text-white light:text-green-800">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-4 mt-8">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 h-12 px-6 dark:from-green-500 dark:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-700 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800">
                Quero ser um parceiro
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/40 dark:from-green-900/40 dark:to-emerald-900/40 light:from-green-600/20 light:to-emerald-600/20"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl rounded-2xl border border-green-500/30 bg-black/60 backdrop-blur-xl p-8 md:p-12 dark:border-green-500/30 dark:bg-black/60 light:border-green-600/30 light:bg-white/60">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                  <Cpu className="mr-1 h-3 w-3" /> Comece agora
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                  Pronto para transformar sua produção?
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed dark:text-gray-300 light:text-gray-700">
                  Entre em contato e descubra como a AgroSinapse pode ajudar sua
                  lavoura com tecnologia de ponta e análises precisas.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row mt-4">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 h-12 px-6 dark:from-green-500 dark:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-700 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800">
                    Entar na lista espera
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 h-12 px-6 dark:border-green-500/30 dark:text-green-400 dark:hover:bg-green-500/10 light:border-green-600/30 light:text-green-600 light:hover:bg-green-500/10"
                  >
                    Fale com um especialista
                  </Button>
                </div>

                {/* Stats */}
                {/* <div className="mt-8 grid grid-cols-3 gap-4 pt-4 border-t border-green-500/20 dark:border-green-500/20 light:border-green-600/20">
                  {[
                    { value: "+500", label: "Produtores" },
                    { value: "12", label: "Estados" },
                    { value: "5 anos", label: "Experiência" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white dark:text-white light:text-green-800">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contato"
        className="w-full border-t border-green-900/20 bg-black/80 backdrop-blur-xl py-12 dark:border-green-900/20 dark:bg-black/80 light:border-green-600/20 light:bg-white/80"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 rounded-full bg-green-500 blur-sm opacity-70 dark:bg-green-500 light:bg-green-600"></div>
                  <Plant className="relative h-8 w-8 text-white dark:text-white light:text-white" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 dark:from-green-400 dark:to-emerald-600 light:from-green-600 light:to-emerald-800">
                  AgroSinapse
                </span>
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                Transformando o agronegócio com inteligência artificial
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white dark:text-white light:text-green-800">
                Contato
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                contato@agrosinapse.com.br
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                +55 (62) 99827-3891
              </p>
              
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white dark:text-white light:text-green-800">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 dark:text-gray-400 dark:hover:text-green-400 light:text-gray-600 light:hover:text-green-600"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 dark:text-gray-400 dark:hover:text-green-400 light:text-gray-600 light:hover:text-green-600"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 dark:text-gray-400 dark:hover:text-green-400 light:text-gray-600 light:hover:text-green-600"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 dark:text-gray-400 dark:hover:text-green-400 light:text-gray-600 light:hover:text-green-600"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-green-900/20 pt-8 text-center text-sm text-gray-400 dark:border-green-900/20 dark:text-gray-400 light:border-green-600/20 light:text-gray-600">
            <p>
              © {new Date().getFullYear()} AgroSinapse. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
