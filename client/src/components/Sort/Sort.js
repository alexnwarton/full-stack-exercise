import "./Sort.css";

const Sort = (props) => {
	const handleSort = (ev) => {
		props.handleSort(ev.target.value);
	}

	return (
		<form className="sort-container" onSubmit={props.handleSubmit}>
			<label htmlFor="sort">SORT BY:</label>
			<select className="sort" onChange={handleSort}>
				<option value="title-ascending">Alphabetically By Title AZ</option>
				<option value="title-descending">Alphabetically By Title ZA</option>
				<option value="publisher-ascending">Alphabetically By Publisher AZ</option>
				<option value="publisher-descending">Alphabetically By Publisher ZA</option>
			</select>
		</form>
	)

}

export default Sort