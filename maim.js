let day = 10;
let dayName;

switch (day) {
	case 0:
		dayName = 'Yakshanba';
		break;

	case 1:
		dayName = 'Dushanba';
		break;
	case 2:
		dayName = 'Seshanba';
		break;
	case 3:
		dayName = 'Chorshanba';
		break;
	default:
		dayName = 'Bunday hafta kuni mavjud emas';
}

console.log(dayName);

if (day === 0) {
	console.log((dayName = 'Yakshanba'));
} else if (day === 1) {
	console.log((dayName = 'Seshanba'));
} else if (day === 2) {
	console.log((dayName = 'Chorshanba'));
} else {
	console.log('Bunday hafta kuni mavjud emas');
}
