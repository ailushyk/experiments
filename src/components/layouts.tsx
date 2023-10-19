export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex max-w-lg flex-col items-center">
      {children}
    </div>
  )
}
