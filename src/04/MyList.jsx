import MyListItem from "./MyListItem"
import MyListData from "./MyListData.json"

export default function MyList() {
	return (
		<>
			<div className="w-8/10 grid grid-cols-1 xl:grid-cols-2 gap-4">
				{
					MyListData.map(item => <MyListItem key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content} />)
				}
			</div>
		</>
	)
}
