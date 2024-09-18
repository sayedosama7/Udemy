import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Course } from '../../../types/types';
import PythonHoverMenu from '../../../Ui/Courses/Python/PythonHoverMenu';

const PythonDetails = ({ course }: { course: Course }) => {
	return (
		<div>
			{/* start details  */}
			<Link className="cursor-pointer no-underline text-black" to="/">
				<img
					className="border border-gray-400"
					src={course.img}
					alt={course.title}
				/>
				<h3 className="text-xl font-medium text-left">
					{course.title}
				</h3>
				<h2 className="font-medium text-left">{course.desc}</h2>
				<p className="text-gray-500 text-sm">{course.instructor}</p>
				<div className="flex justify-start items-center">
					<span className="font-medium">{course.rate}</span>
					<Stack spacing={1}>
						<Rating
							name="size-small"
							defaultValue={Number(course.stars)}
							size="small"
							sx={{ color: '#b4690e' }}
						/>
					</Stack>
					<span className="text-gray-500 text-sm">
						({course.rateNumber})
					</span>
				</div>
				<div>
					<span className="font-medium">{course.price}</span>
					<span className="text-gray-500 text-sm ml-2">
						<del>{course.discount}</del>
					</span>
					<p className="capitalize bg-yellow-200 w-1/2 px-2 text-sm font-medium">
						{course.bestSeller}
					</p>
				</div>
			</Link>

			<button className="bg-violet-800 w-full text-white p-2 mt-2 md:hidden lg:hidden">
				Add to Cart
			</button>

			{/* start hover menu */}
			<div className="menu">
				<PythonHoverMenu />
			</div>
		</div>
	);
};

export default PythonDetails;
