import LocalizedLink from "@/components/localized-link";
import type { ContentPage } from "@/lib/content-pages";

export default function ContentPageView({
  page,
  homeLabel,
}: {
  page: ContentPage;
  homeLabel: string;
}) {
  return (
    <article className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <LocalizedLink href="/" className="hover:text-[#171717]">
                {homeLabel}
              </LocalizedLink>
            </li>
            <li aria-hidden className="px-1">
              /
            </li>
            <li className="text-[#171717]">{page.h1}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#171717]">
            {page.h1}
          </h1>
          <p className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-5 text-base leading-relaxed text-gray-700">
            {page.definition}
          </p>
        </header>

        <div className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-xl font-semibold text-[#171717]">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mb-3 text-base leading-relaxed text-gray-600"
                >
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-gray-600">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {page.faq.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xl font-semibold text-[#171717]">FAQ</h2>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="mb-2 text-base font-semibold text-[#171717]">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 rounded-2xl bg-[#FFF4EF] p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[#171717]">
            {page.cta.heading}
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-gray-600">{page.cta.body}</p>
          <LocalizedLink
            href={page.cta.href}
            className="inline-flex rounded-full bg-[#FB4C01] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e04501]"
          >
            {page.cta.button}
          </LocalizedLink>
        </section>

        {page.related.length > 0 && (
          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {homeLabel === "Start" ? "Weiterlesen" : "Related"}
            </h2>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
              {page.related.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    href={link.href}
                    className="text-sm font-medium text-[#FB4C01] hover:underline"
                  >
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
