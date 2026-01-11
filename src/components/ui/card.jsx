export default function Card({ children }) {
  return (
    <div className="bg-nero text-bianco p-10 rounded-3xl hover:scale-105 transition-all duration-300 relative space-y-4 z-4">
      {children}
    </div>
  )
}