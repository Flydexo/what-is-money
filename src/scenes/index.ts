export interface Dialog {
	message: string;
	answers?: { key: string; value: string }[];
	character?: {
		name: string;
		img_url?: string;
	};
}

export interface GameScene {
	background_url: string;
	dialogs: Dialog[];
	music_url: string;
}

export const SCENES: GameScene[] = [
	{
		background_url: '/backgrounds/scene_1.png',
		dialogs: [
			{
				message:
					'Vous marchez dans la rue avec votre mère, et soudain vous lui demandez',
			},
			{
				message: "Maman, c'est quoi l'argent ?",
				character: {
					name: 'Vous',
				},
			},
			{
				message: 'Tu poses trop de questions ! Suis moi',
				character: {
					name: 'Manaman',
				},
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_2.png',
		dialogs: [
			{
				message: "Vous croisez le regard d'un inconnu",
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_3.png',
		dialogs: [
			{
				message: 'Il a laissé tomber un dictionnaire au sol',
			},
			{
				message:
					'Vous vous approchez du dictionnaire, il brille avec une lueur magique',
			},
			{
				message:
					'Vous vous mettez a genoux, vous approchez votre main du dictionnaire',
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_4.jpeg',
		dialogs: [
			{
				message: 'Vous êtes téléporté dans une ancienne bibliothèque',
			},
			{
				message: "Un homme s'approche de vous, il s'agit d'Aristote",
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_4.jpeg',
		dialogs: [
			{
				message: "Que faites-vous ici jeune homme ? Vous m'avez l'air perdu",
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
			{
				message:
					"Je ne sais pas, mais j'avais une question. Puis-je vous la poser ?",
				character: {
					name: 'Vous',
				},
			},
			{
				message: 'Oui, bien-sûr allez-y, sur quoi porte-elle ?',
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
			{
				message: "C'est quoi la monnaie ?",
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"En effet, j'ai beaucoup réfléchi à cette question de la monnaie. Tu sais, l'argent est un objet très important dans la vie des hommes. Il sert à échanger des biens et des services, mais il peut aussi créer des problèmes.",
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
			{
				message: 'Comment ça, des problèmes ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Eh bien, par exemple, si une personne a beaucoup d'argent, elle peut devenir très puissante et influente. Cela peut conduire à des inégalités et des injustices. C'est pourquoi il est important de bien réfléchir à la manière dont la monnaie est utilisée dans la société.",
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
			{
				message: 'Mais comment peut-on éviter ces inégalités ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"C'est une question complexe. En général, je pense que la monnaie doit être utilisée pour faciliter les échanges entre les personnes, mais elle ne doit pas devenir une fin en soi. Autrement dit, l'argent ne doit pas être la seule motivation des hommes. Il faut aussi valoriser d'autres choses, comme le savoir, la sagesse, l'amitié et la vertu.",
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
			{
				message: 'Et comment peut-on faire pour valoriser ces choses-là ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"C'est une question difficile, mais je crois qu'il faut éduquer les gens pour qu'ils comprennent la valeur de ces choses. Il faut aussi mettre en place des lois et des institutions qui favorisent le bien commun et qui évitent les abus de pouvoir. Enfin, il faut cultiver l'amitié et la solidarité entre les hommes, car c'est ainsi que nous pourrons construire une société plus juste et plus équilibrée.",
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
			{
				message:
					"Je vois. Merci Aristote pour ces explications. C'est très intéressant.",
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"De rien, jeune enfant. N'oublie pas que l'argent est un outil, mais ce n'est pas la seule chose qui compte dans la vie. Il y a tellement d'autres choses qui peuvent rendre notre existence plus belle et plus riche en sens.",
				character: {
					name: 'Aristote',
					img_url: '/characters/portrait_aristote.png',
				},
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_5.webp',
		dialogs: [
			{
				message: "Le dictionnaire s'agite et vous l'attrapez",
			},
			{
				message: 'Vous êtes téléporté dans un bureau',
			},
			{
				message: "Une femme s'approche de vous, il s'agit de Christine Lagarde",
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_5.webp',
		music_url: '',
		dialogs: [
			{
				message:
					"Bonjour Christine Lagarde, j'ai entendu dire que tu étais la présidente de la Banque centrale européenne. J'aimerais savoir ce que tu penses de l'argent et de la monnaie.",
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Bonjour jeune enfant, en effet je suis la présidente de la Banque centrale européenne et je suis heureuse de répondre à ta question. La monnaie est un élément crucial de l'économie et de notre vie quotidienne.",
				character: {
					name: 'Christine Lagarde',
					img_url: '/characters/portrait_christine_lagarde.png',
				},
			},
			{
				message: 'Mais pourquoi la monnaie est-elle si importante ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"La monnaie est un moyen d'échange qui facilite les transactions entre les personnes. Sans monnaie, il serait très difficile de réaliser des échanges efficaces et d'avoir une économie fonctionnelle.",
				character: {
					name: 'Christine Lagarde',
					img_url: '/characters/portrait_christine_lagarde.png',
				},
			},
			{
				message: 'Et comment fonctionne la monnaie ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"La monnaie est créée par la Banque centrale et circule dans l'économie. Elle permet de réaliser des échanges de biens et de services. En tant que Banque centrale, nous veillons à maintenir la stabilité de la monnaie et à prévenir l'inflation excessive.",
				character: {
					name: 'Christine Lagarde',
					img_url: '/characters/portrait_christine_lagarde.png',
				},
			},
			{
				message:
					'Mais est-ce que la monnaie peut créer des problèmes, comme des inégalités ou des injustices ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Oui, la monnaie peut créer des inégalités si elle est mal distribuée. C'est pourquoi nous veillons à maintenir la stabilité de la monnaie et à garantir une distribution équitable des revenus.",
				character: {
					name: 'Christine Lagarde',
					img_url: '/characters/portrait_christine_lagarde.png',
				},
			},
			{
				message:
					"Merci beaucoup pour tes explications, Christine Lagarde. C'est très intéressant.",
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"De rien, jeune enfant. La monnaie est un sujet important et il est important de comprendre son rôle dans l'économie et dans notre vie quotidienne.",
				character: {
					name: 'Christine Lagarde',
					img_url: '/characters/portrait_christine_lagarde.png',
				},
			},
		],
	},
	{
		background_url: '/backgrounds/scene_6.png',
		dialogs: [
			{
				message: "Le dictionnaire s'agite et vous l'attrapez",
			},
			{
				message: 'Vous êtes téléporté dans un bureau',
			},
			{
				message:
					"Un homme visage caché s'approche de vous, il s'agit de Satoshi Nakamoto",
			},
		],
		music_url: '/musics/loading_screen.mp3',
	},
	{
		background_url: '/backgrounds/scene_6.png',
		music_url: '',
		dialogs: [
			{
				message:
					"Bonjour Satoshi Nakamoto, j'ai entendu dire que tu étais le créateur de Bitcoin. J'aimerais savoir ce que tu penses de l'argent et de la monnaie.",
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Bonjour jeune enfant, c'est vrai que j'ai créé Bitcoin. Pour moi, l'argent et la monnaie sont des concepts très importants. La monnaie est un outil qui nous permet de réaliser des échanges, mais elle peut aussi être source de problèmes.",
				character: {
					name: 'Satoshi Nakamoto',
					img_url: '/characters/portrait_satoshi_nakamoto.png',
				},
			},
			{
				message: 'Comment ça, des problèmes ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Eh bien, traditionnellement, la monnaie est créée et contrôlée par les gouvernements et les banques centrales. Cela peut conduire à des inégalités et des abus de pouvoir. Avec Bitcoin, j'ai créé une nouvelle forme de monnaie qui est décentralisée et qui permet à tous les utilisateurs de contrôler leur propre argent.",
				character: {
					name: 'Satoshi Nakamoto',
					img_url: '/characters/portrait_satoshi_nakamoto.png',
				},
			},
			{
				message: 'Mais comment fonctionne Bitcoin ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Bitcoin fonctionne sur un réseau décentralisé appelé blockchain. C'est un livre de compte public et transparent où toutes les transactions sont enregistrées. Chaque utilisateur a son propre portefeuille numérique et peut envoyer et recevoir des bitcoins en toute sécurité et de manière anonyme.",
				character: {
					name: 'Satoshi Nakamoto',
					img_url: '/characters/portrait_satoshi_nakamoto.png',
				},
			},
			{
				message:
					'Mais est-ce que Bitcoin peut créer des problèmes, comme des inégalités ou des injustices ?',
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"Bitcoin a été créé dans le but de favoriser une économie plus équitable et plus transparente. C'est pourquoi nous encourageons la participation de tous les utilisateurs pour garantir une gouvernance démocratique et équitable.",
				character: {
					name: 'Satoshi Nakamoto',
					img_url: '/characters/portrait_satoshi_nakamoto.png',
				},
			},
			{
				message:
					"Merci beaucoup pour tes explications, Satoshi Nakamoto. C'est très intéressant.",
				character: {
					name: 'Vous',
				},
			},
			{
				message:
					"De rien, jeune enfant. Bitcoin est une innovation passionnante qui offre de nouvelles possibilités pour la monnaie et l'économie. Il est important de comprendre son potentiel et ses limites.",
				character: {
					name: 'Satoshi Nakamoto',
					img_url: '/characters/portrait_satoshi_nakamoto.png',
				},
			},
		],
	},
];
