import styled from "styled-components";
import {
	IoSearch,
	IoHome,
	IoNotificationsSharp,
	IoShare,
} from "react-icons/io5";
import { BiChevronDown, BiCubeAlt } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import ImageCard from "./ImageCard";

function Page() {
	const categories = Array.from({ length: 10 }, (v, i) => i);

	const images = Array.from({ length: 10 }, (v, i) => i);

	return (
		<PageContainer>
			{/* SideBar goes here */}
			<MainSection>
				<TopArea>
					<BiCubeAlt />
					<SearchBar>
						<SearchButton></SearchButton>
						<SearchInput placeholder='Find Something...' />
						<IoSearch />
					</SearchBar>
					<UserAvatar>
						<img
							src='https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg'
							alt='avatar'
						/>
					</UserAvatar>
				</TopArea>

				<CategoryBar>
					{categories.map((v, i) => {
						console.log(i);
						return (
							<Category>
								<span>Category</span>
								<BiChevronDown key={i} />
							</Category>
						);
					})}
				</CategoryBar>

				<Gallery>
					{images.map((v, i) => {
						console.log(i);
						return <ImageCard />;
					})}
				</Gallery>
			</MainSection>
			<BottomBar>
				<IoHome />
				<SiGooglemessages />
				<IoNotificationsSharp />
				<IoShare />
			</BottomBar>
		</PageContainer>
	);
}

export default Page;

const PageContainer = styled.div``;
const MainSection = styled.main`
	padding: 1rem;
	background-color: #f7f7f7;
`;
const TopArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	> .react-icons {
		width: 2rem;
		height: 2rem;
		color: #190598;
	}
`;
const SearchBar = styled.div`
	box-shadow: 0px 4px 20px 2px rgba(40, 40, 40, 0.2);
	border-radius: 5px;
	padding: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	background-color: white;

	> .react-icons {
		color: gray;
	}
`;
const SearchInput = styled.input`
	flex-grow: 1;
	::placeholder {
		color: gray;
	}
`;
const SearchButton = styled.button`
	display: none;
	visibility: hidden;
`;
const UserAvatar = styled.div`
	width: 2em;
	height: 2em;
	border-radius: 50%;
	overflow: hidden;

	> img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`;
// ------------------------------
const CategoryBar = styled.div`
	display: flex;
	margin: 2rem 0;
	overflow-x: auto;
	gap: 0.1em;
	box-shadow: 0px 4px 20px 2px rgba(40, 40, 40, 0.2);
	background-color: white;
`;
const Category = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.3em;
	padding: 0.6em 0.85em;
	color: #686868;

	// border: 1px solid blue;
`;
// -------------------------------
const Gallery = styled.section`
	display: grid;
	grid-template-columns: auto;
	align-items: center;
	justify-items: center;
	gap: 1em;
`;

const BottomBar = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
	width: 98vw;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	background-color: white;
	border-radius: 15px 15px 0 0;
	left: 50%;
	transform: translateX(-50%);

	> .react-icons {
		width: 2rem;
		height: 2rem;
		color: #190598;
	}
`;
