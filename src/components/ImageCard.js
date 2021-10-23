import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineHeart, AiOutlineDislike } from "react-icons/ai";

function ImageCard() {
	return (
		<Card>
			<CardContent>
				<PersonData>Xodeeq, 22</PersonData>
				<Location>
					<MdLocationPin />
					<span>Lagos, Nigeria</span>
				</Location>
			</CardContent>
		</Card>
	);
}

export default ImageCard;

const Card = styled.div`
  position: relative;
	width: 20em;
	height: 25rem;
	background-image: url("https://res.cloudinary.com/moh-x/image/upload/v1634993394/projects/bluecube/mohammad-faruque-TwuPHbcQ57w-unsplash_aseik0.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  object-fit: contain;
  color: white;
  overflow:hidden;
	}
`;

const CardContent = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0px;
	padding: 3em 2em;
	background: linear-gradient(
		180deg,
		transparent,
		rgba(37, 37, 37, 0.61),
		#111
	);
	width: 100%;
`;

const PersonData = styled.h2`
	margin-bottom: 0.4em;
`;

const Location = styled.div`
	display: flex;
	gap: 0.5em;
`;
