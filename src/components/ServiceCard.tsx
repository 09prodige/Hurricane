interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="border rounded-xl p-6 bg-white shadow hover:shadow-lg transition">
      {icon && <img src={icon} alt={title} className="w-12 mb-4" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
