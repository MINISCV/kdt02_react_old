export default function TailCard({ imgurl, title, subtitle, content }) {
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="h-48">
        <img src={imgurl.replace(/^http:\/\//, 'https://')} alt={title} className="h-full rounded-t-lg object-cover" />
      </div>
      <div className="p-5 flex flex-col justify-start items-start">
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </div>
        <div className="w-full mb-3 font-normal text-gray-700 text-left">
          {subtitle}
        </div>
        <div className="w-full text-left text-sm">
          {content.split(',').map(item => <span key={item} className="bg-gray-100 inline-flex p-1 m-1 rounded">{item}</span>)}
        </div>
      </div>
    </div>
  )
}