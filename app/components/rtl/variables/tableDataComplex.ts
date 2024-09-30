type RowObj = {
	name: string;
	status: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
	{
		name: 'استخر قصر آبی',
		progress: 75.5,
		status: 'Approved',
	},
	{
		name: 'استخر تختی',
		progress: 25.5,
		status: 'Disable',
	},
	{
		name: 'استخر قصر آبی',
		progress: 90,
		status: 'Error',
	},
	{
		name: 'استخر تختی',
		progress: 50.5,
		status: 'Approved',
	}
];
export default tableDataComplex;
