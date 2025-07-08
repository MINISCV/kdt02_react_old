import MyToggleBox from "./MyToggleBox";

export default function MyToggle() {
    return (
        <div className="flex gap-4 w-8/10">
            <MyToggleBox color="blue" />
            <MyToggleBox color="orange" />
            <MyToggleBox color="lime" />
        </div>
    )
}
