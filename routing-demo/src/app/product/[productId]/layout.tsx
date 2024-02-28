function getRandomFirst(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomFirst(2);
  if (random === 1) {
    throw new Error("error loading product");
  }
  return (
    <>
      {children}
      <p>features products</p>
    </>
  );
}
