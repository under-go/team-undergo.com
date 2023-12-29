export default function MainLayout({ children }) {
  return (
    <div className="pt-20 w-full flex justify-center">
      <div className="w-1/2">{children}</div>
    </div>
  );
}
