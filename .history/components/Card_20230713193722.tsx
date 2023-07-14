interface CardProps {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Card({ title, children }: CardProps) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        {children}
      </div>
    );
  }
  