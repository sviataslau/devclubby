Schema = {};
Schema.talks = new SimpleSchema(
	{
		title: {
			type: String,
			label: 'Название'
		},
		description: {
			type: String,
			label: 'Описание'
		},
		date: {
			type: Date,
			label: 'Дата'
		},
		votes: {
			type: Number,
			defaultValue: 0,
			optional: true
		}
	}
);
