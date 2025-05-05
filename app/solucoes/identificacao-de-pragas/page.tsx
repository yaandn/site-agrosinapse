import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Bug, ChevronRight, Cpu, Menu, TreesIcon as Plant, ScanLine, Search } from "lucide-react"

export default function IdentificacaoDePragas() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-zinc-900 text-white dark:bg-gradient-to-b dark:from-black dark:to-zinc-900 light:bg-gradient-to-b light:from-white light:to-gray-100 light:text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-green-900/20 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30 light:bg-white/60 light:backdrop-blur-xl light:supports-[backdrop-filter]:bg-white/30 light:border-green-500/20">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-green-500 blur-sm opacity-70"></div>
              <Plant className="relative h-8 w-8 text-white dark:text-white light:text-green-800" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 dark:from-green-400 dark:to-emerald-600 light:from-green-600 light:to-emerald-800">
              AgroSinapse
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Início
            </Link>
            <Link
              href="/#sobre"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Sobre
            </Link>
            <Link
              href="/#solucoes"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Soluções
            </Link>
            <Link
              href="/#contato"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400 light:text-gray-700 light:hover:text-green-600"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:flex bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800">
              Fale conosco
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-green-800 text-green-400">
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/20"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/20"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <Link
              href="/#solucoes"
              className="inline-flex items-center text-sm text-gray-400 hover:text-green-400 mb-8 dark:text-gray-400 dark:hover:text-green-400 light:text-gray-600 light:hover:text-green-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para soluções
            </Link>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                  <Bug className="mr-1 h-3 w-3" /> Detecção inteligente
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                  Identificação de Pragas
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400 light:text-gray-600">
                  Detecção precoce de pragas e doenças através de imagens, com sugestões de tratamento para proteger sua
                  lavoura.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 h-12 px-6 dark:from-green-500 dark:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-700 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800">
                    Solicitar demonstração
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 h-12 px-6 dark:border-green-500/30 dark:text-green-400 dark:hover:bg-green-500/10 light:border-green-600/30 light:text-green-600 light:hover:bg-green-500/10"
                  >
                    Fale com um especialista
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-2xl dark:bg-green-500/20 light:bg-green-500/30"></div>
                <div className="relative rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-1 overflow-hidden dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40">
                  <Image
                    src="https://images.unsplash.com/photo-1626810333400-5c1c6a4a8d6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="Identificação de Pragas"
                    className="rounded-xl object-cover w-full"
                  />

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 rounded-lg border border-green-500/30 bg-black/60 backdrop-blur-sm p-2 text-xs text-green-400 flex items-center dark:border-green-500/30 dark:bg-black/60 dark:text-green-400 light:border-green-600/30 light:bg-white/60 light:text-green-600">
                    <Search className="mr-1 h-3 w-3" /> Detecção por IA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-40 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/20"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                <Cpu className="mr-1 h-3 w-3" /> Recursos avançados
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Funcionalidades
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                Conheça os recursos que tornam nossa solução de identificação de pragas única
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Reconhecimento por IA",
                  desc: "Algoritmos avançados de inteligência artificial para identificação precisa de pragas e doenças.",
                  icon: Cpu,
                },
                {
                  title: "Biblioteca de Pragas",
                  desc: "Banco de dados completo com informações detalhadas sobre as principais pragas agrícolas.",
                  icon: Bug,
                },
                {
                  title: "Tratamentos Recomendados",
                  desc: "Sugestões personalizadas de tratamentos baseadas na identificação precisa do problema.",
                  icon: Plant,
                },
                {
                  title: "Detecção Precoce",
                  desc: "Identificação de pragas em estágios iniciais, antes que causem danos significativos à lavoura.",
                  icon: Search,
                },
                {
                  title: "Histórico de Ocorrências",
                  desc: "Registro completo de todas as ocorrências de pragas para análise de padrões e prevenção.",
                  icon: ScanLine,
                },
                {
                  title: "Alertas em Tempo Real",
                  desc: "Notificações imediatas quando novas pragas são detectadas na sua lavoura.",
                  icon: Bug,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-green-500/50 hover:bg-black/60 dark:border-green-500/30 dark:bg-black/40 dark:hover:border-green-500/50 dark:hover:bg-black/60 light:border-green-600/30 light:bg-white/40 light:hover:border-green-600/50 light:hover:bg-white/60"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-green-500/20 blur-2xl group-hover:bg-green-500/30 dark:bg-green-500/20 dark:group-hover:bg-green-500/30 light:bg-green-500/30 light:group-hover:bg-green-500/40"></div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 group-hover:bg-green-500/20 dark:bg-green-500/10 dark:group-hover:bg-green-500/20 light:bg-green-500/20 light:group-hover:bg-green-500/30">
                    <feature.icon className="h-6 w-6 text-green-400 dark:text-green-400 light:text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white dark:text-white light:text-green-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl dark:bg-green-500/5 light:bg-green-500/10"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400 light:border-green-600/30 light:bg-green-500/10 light:text-green-600">
                <ScanLine className="mr-1 h-3 w-3" /> Processo simplificado
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Como Funciona
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400 light:text-gray-600">
                Entenda o processo de identificação de pragas com o AgroSinapse
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Captura de Imagens",
                  desc: "Tire fotos das plantas suspeitas usando o aplicativo móvel ou faça upload de imagens existentes.",
                  icon: ScanLine,
                },
                {
                  step: "2",
                  title: "Análise por IA",
                  desc: "Nossa inteligência artificial analisa as imagens e identifica pragas, doenças ou deficiências nutricionais.",
                  icon: Cpu,
                },
                {
                  step: "3",
                  title: "Recomendações",
                  desc: "Receba diagnósticos precisos e recomendações de tratamento personalizadas para sua lavoura.",
                  icon: Plant,
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-green-500/50 hover:bg-black/60 dark:border-green-500/30 dark:bg-black/40 dark:hover:border-green-500/50 dark:hover:bg-black/60 light:border-green-600/30 light:bg-white/40 light:hover:border-green-600/50 light:hover:bg-white/60"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-green-500/20 blur-2xl group-hover:bg-green-500/30 dark:bg-green-500/20 dark:group-hover:bg-green-500/30 light:bg-green-500/30 light:group-hover:bg-green-500/40"></div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 group-hover:bg-green-500/20 dark:bg-green-500/10 dark:group-hover:bg-green-500/20 light:bg-green-500/20 light:group-hover:bg-green-500/30">
                    <span className="text-xl font-bold text-green-400 dark:text-green-400 light:text-green-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white dark:text-white light:text-green-800">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <div className="relative rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-sm p-1 overflow-hidden dark:border-green-500/30 dark:bg-black/40 light:border-green-600/30 light:bg-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={900}
                  height={500}
                  alt="Processo de identificação de pragas"
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/40 dark:from-green-900/40 dark:to-emerald-900/40 light:from-green-600/20 light:to-emerald-600/20"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 dark:from-white dark:via-green-200 dark:to-green-400 light:from-green-800 light:via-green-600 light:to-green-700">
                Proteja sua lavoura contra pragas
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed dark:text-gray-300 light:text-gray-700">
                Entre em contato e descubra como nossa solução de identificação de pragas pode ajudar a proteger sua
                produção.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row mt-4">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 h-12 px-6 dark:from-green-500 dark:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-700 light:from-green-600 light:to-emerald-700 light:hover:from-green-700 light:hover:to-emerald-800">
                  Agende uma demonstração
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 h-12 px-6 dark:border-green-500/30 dark:text-green-400 dark:hover:bg-green-500/10 light:border-green-600/30 light:text-green-600 light:hover:bg-green-500/10"
                >
                  Fale com um especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-green-900/20 bg-black/80 backdrop-blur-xl py-8 dark:border-green-900/20 dark:bg-black/80 light:border-green-600/20 light:bg-white/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-green-500 blur-sm opacity-70 dark:bg-green-500 light:bg-green-600"></div>
                <Plant className="relative h-8 w-8 text-white dark:text-white light:text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 dark:from-green-400 dark:to-emerald-600 light:from-green-600 light:to-emerald-800">
                AgroSinapse
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
              © {new Date().getFullYear()} AgroSinapse. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
