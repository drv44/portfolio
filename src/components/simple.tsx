// Create a simple version without Framer Motion to test
export function SimpleAboutSection() {
  return (
    <section id="about" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          About Me - Simple Version
        </h2>
        <p className="text-white">This should always be visible</p>
      </div>
    </section>
  )
}
