import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardAnalitico() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navegação de volta */}
      <div className="container py-8">
        <Link href="/#solucoes">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para soluções
          </Button>
        </Link>
      </div>

      {/* Cabeçalho */}
      <section className="container py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Dashboard Analítico</h1>
            <p className="text-muted-foreground text-lg">
              Visualize, analise e tome decisões baseadas em dados com nosso dashboard analítico completo para o
              agronegócio.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden bg-foreground/5 dark:bg-foreground/10">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Dashboard analítico para agricultura"
              className="aspect-video object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Dados transformados em insights</h2>
            <p className="text-muted-foreground">
              Nosso dashboard analítico centraliza e processa dados de diversas fontes para fornecer insights valiosos
              sobre sua operação agrícola, permitindo decisões mais rápidas e precisas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <div className="rounded-full bg-primary w-1.5 h-1.5" />
                </div>
                <span>Visualização em tempo real de indicadores-chave</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <div className="rounded-full bg-primary w-1.5 h-1.5" />
                </div>
                <span>Análise de tendências e padrões históricos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <div className="rounded-full bg-primary w-1.5 h-1.5" />
                </div>
                <span>Alertas e notificações personalizáveis</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <div className="rounded-full bg-primary w-1.5 h-1.5" />
                </div>
                <span>Relatórios detalhados e exportáveis</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden bg-foreground/5 dark:bg-foreground/10">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Gráficos e análises do dashboard"
                className="aspect-video object-cover w-full"
              />
            </div>
            <h3 className="text-2xl font-bold">Inteligência para o agronegócio</h3>
            <p className="text-muted-foreground">
              Combinamos tecnologias de big data, inteligência artificial e visualização avançada para transformar dados
              brutos em informações acionáveis para sua operação.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-lg bg-foreground/5 dark:bg-foreground/10 p-4">
                <h4 className="font-bold">Personalização completa</h4>
                <p className="text-sm text-muted-foreground">
                  Adapte o dashboard às necessidades específicas do seu negócio
                </p>
              </div>
              <div className="rounded-lg bg-foreground/5 dark:bg-foreground/10 p-4">
                <h4 className="font-bold">Acesso em qualquer lugar</h4>
                <p className="text-sm text-muted-foreground">
                  Acesse seus dados de qualquer dispositivo, a qualquer momento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="container py-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Recursos principais</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-foreground/5 dark:bg-foreground/10 p-6 space-y-2">
            <div className="rounded-full bg-primary/10 p-2 w-fit">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold">Visualização avançada</h3>
            <p className="text-sm text-muted-foreground">
              Gráficos interativos e mapas georreferenciados para visualizar dados complexos
            </p>
          </div>
          <div className="rounded-xl bg-foreground/5 dark:bg-foreground/10 p-6 space-y-2">
            <div className="rounded-full bg-primary/10 p-2 w-fit">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold">Análise preditiva</h3>
            <p className="text-sm text-muted-foreground">
              Previsões baseadas em IA para antecipar tendências e problemas potenciais
            </p>
          </div>
          <div className="rounded-xl bg-foreground/5 dark:bg-foreground/10 p-6 space-y-2">
            <div className="rounded-full bg-primary/10 p-2 w-fit">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="font-bold">Sistema de alertas</h3>
            <p className="text-sm text-muted-foreground">
              Notificações personalizáveis para eventos críticos e oportunidades
            </p>
          </div>
        </div>
      </section>

      {/* Demonstração interativa */}
      <section className="container py-12 space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Veja na prática</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experimente uma demonstração interativa do nosso dashboard analítico e descubra como ele pode transformar
            sua gestão agrícola.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden bg-foreground/5 dark:bg-foreground/10 aspect-video max-w-4xl mx-auto">
          <img
            src="/placeholder.svg?height=500&width=900"
            alt="Demonstração interativa do dashboard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center pt-4">
          <Button size="lg">Acessar demonstração</Button>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container py-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">O que nossos clientes dizem</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-foreground/5 dark:bg-foreground/10 p-6 space-y-4">
            <p className="italic text-muted-foreground">
              "O dashboard analítico da AgroSinapse transformou nossa operação. Conseguimos identificar padrões que
              antes passavam despercebidos e tomar decisões muito mais precisas."
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 w-10 h-10"></div>
              <div>
                <p className="font-bold">João Silva</p>
                <p className="text-sm text-muted-foreground">Produtor de Soja, MT</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-foreground/5 dark:bg-foreground/10 p-6 space-y-4">
            <p className="italic text-muted-foreground">
              "A facilidade de visualizar todos os dados da fazenda em um único lugar nos economiza horas de trabalho
              por semana. A interface é intuitiva e os insights são valiosos."
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 w-10 h-10"></div>
              <div>
                <p className="font-bold">Maria Oliveira</p>
                <p className="text-sm text-muted-foreground">Gerente Agrícola, SP</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-foreground/5 dark:bg-foreground/10 p-6 space-y-4">
            <p className="italic text-muted-foreground">
              "Os alertas em tempo real nos ajudaram a prevenir perdas significativas. O retorno sobre o investimento
              foi quase imediato."
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 w-10 h-10"></div>
              <div>
                <p className="font-bold">Carlos Mendes</p>
                <p className="text-sm text-muted-foreground">Diretor de Operações, GO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <div className="rounded-xl bg-primary/5 dark:bg-primary/10 p-8 text-center space-y-4">
          <h2 className="text-3xl font-bold">Transforme dados em resultados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para uma demonstração personalizada do nosso dashboard analítico e descubra como podemos
            ajudar sua operação.
          </p>
          <div className="pt-4">
            <Button size="lg">Agendar demonstração</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
