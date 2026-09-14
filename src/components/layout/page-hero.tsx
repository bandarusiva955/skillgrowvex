interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-secondary-500/20 blur-3xl" />
      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-200">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
