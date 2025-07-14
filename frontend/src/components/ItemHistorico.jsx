export default function ItemHistorico({ item }) {
  return (
    <div className="p-2 border-b border-purple-300">
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-bold">{item.name}</span>
        <span className="text-gray-600">{item.date.toLocaleDateString()}</span>
      <p className="text-gray-700">{item.description}</p>
      </div>
    </div>
  );
}