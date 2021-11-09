import "./Sort.css";

const Sort = (props) => {
	const handleSort = (ev) => {
		props.handleSort(ev.target.value);
	}

	return (
		<form className="sort-container" onSubmit={props.handleSubmit}>
			<label htmlFor="sort">SORT BY:</label>
			<select className="sort" onChange={handleSort}>
				<option value="title-ascending">Alphabetically By Title</option>
			</select>
		</form>
	)

}

export default Sort