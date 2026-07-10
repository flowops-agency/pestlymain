import LocalizedLink from "@/components/localized-link";
import type { ServicePage } from "@/lib/service-pages";

export default function ServicePageView({
  page,
  homeLabel,
  hubLabel,
  termsLabel,
}: {
  page: ServicePage;
  homeLabel: string;
  hubLabel: string;
  termsLabel: string;
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
            <li>
              <LocalizedLink
                href="/leistungen"
                className="hover:text-[#171717]"
              >
                {hubLabel}
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
                  key={p.slice(0, 40)}
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

        {page.terms.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xl font-semibold text-[#171717]">
              {termsLabel}
            </h2>
            <dl className="space-y-3">
              {page.terms.map((t) => (
                <div
                  key={t.term}
                  className="rounded-xl border border-gray-200 px-4 py-3"
                >
                  <dt className="text-sm font-semibold text-[#171717]">
                    {t.term}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">{t.meaning}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

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
      </div>
    </article>
  );
}
