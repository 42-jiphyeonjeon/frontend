import React from 'react';
import {Link} from 'react-router-dom';

export function Button(props)
{
	let value;
	let className;
	let paramId = props.id; //unable이어도 booktigerId는 존재하기 때문에 초기 설정.
	if (props.active === false)
	{
		value = "대출불가";
		className = "unable_checkout";
	}
	else if (!props.checkout) // active true & 대여사항이 없다? -> 대여가능
	{
		value = "대출하기";
		className = "checkout";
	}
	else{ 
		value = "반납하기";
		className = "checkin";
		paramId = props.checkout.id;
	}
	return (
		//대출하기 / 반납하기 버튼 누르는건데 여기서도 props 받아야 하지 않니..?
		//props를 match.state로 할 수 있나..
		<Link to={{
			pathname : `/${className}/${paramId}`,
			state : {
				data: props.data
			}
		}}>
			<input type="submit" class={className} value = {value}/>
		</Link>
	);
}

export default Button;