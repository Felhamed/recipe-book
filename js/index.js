"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout() {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			data: []
		};
		return _this;
	}

	Layout.prototype.render = function render() {
		return React.createElement(BoxesContainer, null);
	};

	return Layout;
}(React.Component);

var Footer = function (_React$Component2) {
	_inherits(Footer, _React$Component2);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	Footer.prototype.render = function render() {
		return React.createElement(
			"footer",
			{ className: "page__footer" },
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "column four" },
					React.createElement(
						"h2",
						null,
						"Connect"
					),
					React.createElement(
						"ul",
						{ className: "connect-list" },
						React.createElement(
							"li",
							{ className: "connect-list__item" },
							React.createElement(
								"a",
								{
									className: "connect-list__link",
									href: "https://ca.linkedin.com/",
									target: "newwindow"
								},
								React.createElement("i", { className: "zmdi zmdi-linkedin zmdi-hc-5x" })
							)
						),
						React.createElement(
							"li",
							{ className: "connect-list__item" },
							React.createElement(
								"a",
								{
									className: "connect-list__link",
									href: "https://github.com/",
									target: "newwindow"
								},
								React.createElement("i", { className: "zmdi zmdi-github-alt zmdi-hc-5x" })
							)
						),
						React.createElement(
							"li",
							{ className: "connect-list__item" },
							React.createElement(
								"a",
								{
									className: "connect-list__link",
									href: "https://twitter.com/",
									target: "newwindow"
								},
								React.createElement("i", { className: "zmdi zmdi-twitter zmdi-hc-5x" })
							)
						)
					)
				)
			)
		);
	};

	return Footer;
}(React.Component);

var BoxesContainer = function (_React$Component3) {
	_inherits(BoxesContainer, _React$Component3);

	function BoxesContainer() {
		_classCallCheck(this, BoxesContainer);

		var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this));

		var storedRecipe = localStorage.getItem('recipesFCC');
		var data;
		if (storedRecipe) {
			data = JSON.parse(storedRecipe);
		} else {
			data = [{
				key: 0,
				title: "Salsa verde",
				ingredients: "small pack tarragon\n\n2 small packs flat-leaf parsley\n\n30g wild garlic (or 2 garlic cloves)\n\n 3 tsp Dijon mustard\n\n 40g small capers, drained, rinsed and roughly chopped\n\n 200ml extra virgin olive oil\n\n 2 tbsp sherry vinegar",
				instructions: "1. Chop the herbs and garlic with 1 tsp sea salt until very fine. Add the mustard and capers , and combine.\n2. Transfer the mixture to a bowl and stir in the olive oil. Add the vinegar, little by little, stirring and tasting as you go – trust your palate!",
				img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/04/salsa-verde-2.jpg?itok=R9-68UMh"
			}, {
				key: 1,
				title: "Maple-mustard pulled pork",
				ingredients: "200g sea salt\n\n300g light muscovado sugar\n\n2kg/4lb 8oz piece pork shoulder\n\n100ml maple syrup\n\n100g wholegrain mustard\n\n2 tbsp English mustard powder\n\n",
				instructions: "1. Mix the sea salt and 200g of the sugar in a large food bag, add the pork and coat it well. (If you don’t have a bag, rub over the pork in a dish and cover with cling film.) Leave in the fridge overnight.\n\n2. The next day, remove the pork and wipe down the meat with kitchen paper. Heat oven to 140C/120C fan/gas 1. Mix the remaining sugar, the maple syrup, mustards and some ground pepper. Rub half the mixture over the pork and sit it on a rack in a roasting tin. Roast for 6 hrs.\n\n3. Spoon the remaining maple mixture over the pork and roast for 1 hr more.\n\n4. Rest the meat for 30 mins on a plate loosely covered with foil. To serve, tear the pork into big fat chunks and, after skimming the surface, spoon over any juices from the tin.",
				img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1119469_10.jpg?itok=2GIQyKfz"
			}, {
				key: 2,
				title: "Salmon & spinach with tartare cream",
				ingredients: "1 tsp sunflower or vegetable oil\n\n 2 skinless salmon fillet\n\n 250g bag spinach\n\n 2 tbsp reduced-fat crème fraîche\n\njuice ½ lemon\n\n 1 tsp caper, \n\n 2 tbsp flat-leaf parsley, chopped\n\nlemon wedges, to serve",
				instructions: "1. Heat the oil in a pan, season the salmon on both sides, then fry for 4 mins each side until golden and the flesh flakes easily. Leave to rest on a plate while you cook the spinach.\n\n2. Tip the leaves into the hot pan, season well, then cover and leave to wilt for 1 min, stirring once or twice. Spoon the spinach onto plates, then top with the salmon. Gently heat the crème fraîche in the pan with a squeeze of the lemon juice, the capers and parsley, then season to taste. Be careful not to let it boil. Spoon the sauce over the fish, then serve with lemon wedges.",
				img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--52867_12.jpg?itok=pnLXWqFK"
			}, {
				key: 3,
				title: "Spicy black bean tacos",
				ingredients: "1 tbsp vegetable oil\n\n3 garlic cloves, chopped\n\n3 x 400g cans black beans, drained and rinsed\n\n3 tbsp cider vinegar\n\n1 ½ tbsp honey\n\n1 ½ tbsp smoked paprika\n\n1 ½ tbsp ground cumin\n\n1 small garlic clove\n\n2 tbsp roughly chopped coriander\n\n1 green chilli, sliced\n\n2 avocados, halved and stoned\n\njuice 1 lime\n\n110g pack pomegranate seeds\n\n1 green chilli, finely diced\n\n1 small white onion, finely diced\n\nsmall handful fresh coriander, chopped",
				instructions: "1. In a large frying pan, heat the oil and add the garlic. Fry until golden, then add the beans. Pour in the cider vinegar, honey and spices along with 1 tsp or more of salt, to taste. Cook until warmed through, crushing gently with the back of your wooden spoon, then set aside.\n\n2. The best way to make the guacamole is with a large stone pestle and mortar, but you can use a medium bowl and a flat-ended rolling pin instead. Crush the garlic, coriander and chilli into a rough paste. Scoop in the avocado with a little salt and crush roughly – you want it chunky, not smooth. Squeeze in the lime juice and set aside.\n\n3. Mix the salsa ingredients in a small bowl. Heat a griddle pan or steamer and quickly griddle the tortillas or steam a stack of them to warm up. Reheat the bean mixture.\n\n4. To serve, put 1-2 heaped tbsp of beans on a tortilla. Top with a big spoonful of guacamole and some salsa, hot sauce and a dollop of soured cream or yogurt.",
				img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/spicy-black-bean-tacos.jpg?itok=RTBXRL7L"
			}];
		}
		_this3.state = {
			data: data,
			counter: 4,
			// The index of which recipe to populate box with
			currIndex: 0,
			showBox: false
		};
		return _this3;
	}

	/* Function adds new recipe
  * @params [String] title : new recipe title
  * @return [String] ingredients : new recipe ingredients
  */

	BoxesContainer.prototype.addRecipe = function addRecipe(title, ingredients, instructions, img) {
		var data = this.state.data,
		    newCounter = this.state.counter + 1;

		this.setState({ counter: newCounter });

		var newRecipe = {
			key: this.state.counter,
			title: title,
			ingredients: ingredients,
			instructions: instructions
		};
		if (img) {
			newRecipe.img = img;
		}
		this.state.data.push(newRecipe);
		this.forceUpdate();
	};

	/* Function returns index ofobject in array using key
  * @params [Number] key : the key of object
  * @return [Number] index : the index of object in state data
  * array
  */

	BoxesContainer.prototype.getIndex = function getIndex(key) {
		var i = this.state.data.findIndex(function (element) {
			if (element.key === key) {
				return true;
			}
		});
		return i;
	};

	/* Function updates data in this.state and re renders components
  * @params [Number] key : the key of object
  *			   [String] title : title data
  *				 [String] ingredients : ingredients data
  * @return [Number] index : the index of object in state data
  * array
  */

	BoxesContainer.prototype.updateRecipe = function updateRecipe(key, title, ingredients, instructions, img) {
		var data = this.state.data;
		var i = this.getIndex(key);

		this.state.data[i].title = title;
		this.state.data[i].ingredients = ingredients;
		this.state.data[i].instructions = instructions;
		this.state.data[i].img = img;
		this.forceUpdate();
		this.saveToLocal();
	};

	BoxesContainer.prototype.deleteRecipe = function deleteRecipe(key) {
		var i = this.getIndex(key);
		this.state.data.splice(i, 1);
		this.forceUpdate();
		this.closeBox();
		this.saveToLocal();
	};

	BoxesContainer.prototype.saveToLocal = function saveToLocal() {
		localStorage.setItem('recipesFCC', JSON.stringify(this.state.data));
	};

	BoxesContainer.prototype.closeBox = function closeBox() {
		this.setState({ showBox: false });
	};

	BoxesContainer.prototype.showBox = function showBox(key) {
		var index = this.getIndex(key);
		this.setState({
			showBox: true,
			currIndex: index
		});
	};

	BoxesContainer.prototype.render = function render() {
		var box;
		if (this.state.showBox) {
			box = React.createElement(Box, {
				data: this.state.data[this.state.currIndex],
				update: this.updateRecipe.bind(this),
				"delete": this.deleteRecipe.bind(this),
				close: this.closeBox.bind(this)
			});
		}

		return React.createElement(
			"div",
			null,
			box,
			React.createElement(HeaderHeader, {
				add: this.addRecipe.bind(this)
			}),
			React.createElement(Index, {
				data: this.state.data,
				show: this.showBox.bind(this)
			}),
			React.createElement(Footer, null)
		);
	};

	return BoxesContainer;
}(React.Component);

var Tile = function (_React$Component4) {
	_inherits(Tile, _React$Component4);

	function Tile() {
		_classCallCheck(this, Tile);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	Tile.prototype.handleClick = function handleClick() {
		console.log(this.props.data.key);
		this.props.show(this.props.data.key);
	};

	Tile.prototype.render = function render() {
		return React.createElement(
			"div",
			{
				className: "tile",
				onClick: this.handleClick.bind(this)
			},
			React.createElement(TileMain, {
				title: this.props.data.title,
				img: this.props.data.img
			}),
			React.createElement(TileFooter, null)
		);
	};

	return Tile;
}(React.Component);

var TileMain = function (_React$Component5) {
	_inherits(TileMain, _React$Component5);

	function TileMain() {
		_classCallCheck(this, TileMain);

		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
	}

	TileMain.prototype.render = function render() {

		var heroDiv;
		if (this.props.img) {
			heroDiv = React.createElement("div", {
				className: "tile__hero",
				style: {
					background: "url(" + this.props.img + ")",
					backgroundSize: "100% auto",
					backgroundPosition: "center center"
				}
			});
		} else {
			heroDiv = React.createElement("div", {
				className: "tile__hero"
			});
		}
		return React.createElement(
			"main",
			{
				className: "tile__main"
			},
			heroDiv,
			React.createElement(
				"header",
				{ className: "tile__header" },
				React.createElement(
					"h2",
					{ className: "tile__title" },
					" ",
					this.props.title,
					" "
				)
			)
		);
	};

	return TileMain;
}(React.Component);

var Index = function (_React$Component6) {
	_inherits(Index, _React$Component6);

	function Index() {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
	}

	Index.prototype.render = function render() {
		var _this7 = this;

		var data = this.props.data,
		    tileNodes = data.map(function (data) {
			return React.createElement(Tile, {
				show: _this7.props.show,
				data: data
			});
		});
		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"main",
				{ className: "tile-container" },
				tileNodes
			)
		);
	};

	return Index;
}(React.Component);

var TileHeader = function (_React$Component7) {
	_inherits(TileHeader, _React$Component7);

	function TileHeader() {
		_classCallCheck(this, TileHeader);

		return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
	}

	TileHeader.prototype.render = function render() {
		return React.createElement(
			"header",
			{
				className: "tile__header"
			},
			this.props.title
		);
	};

	return TileHeader;
}(React.Component);

var TileFooter = function (_React$Component8) {
	_inherits(TileFooter, _React$Component8);

	function TileFooter() {
		_classCallCheck(this, TileFooter);

		return _possibleConstructorReturn(this, _React$Component8.apply(this, arguments));
	}

	TileFooter.prototype.render = function render() {
		return React.createElement(
			"footer",
			{ className: "tile__footer" },
			React.createElement(
				"button",
				{ className: "btn-primary" },
				React.createElement("i", { className: "zmdi zmdi-open-in-new zmdi-hc-lg btn-icon" }),
				" open recipe"
			)
		);
	};

	return TileFooter;
}(React.Component);

var HeaderHeader = function (_React$Component9) {
	_inherits(HeaderHeader, _React$Component9);

	function HeaderHeader() {
		_classCallCheck(this, HeaderHeader);

		var _this10 = _possibleConstructorReturn(this, _React$Component9.call(this));

		_this10.state = {
			isHidden: true
		};
		return _this10;
	}

	HeaderHeader.prototype.toggleHidden = function toggleHidden() {
		if (this.state.isHidden) {
			this.setState({ isHidden: false });
		} else {
			this.setState({ isHidden: true });
		}
	};

	HeaderHeader.prototype.render = function render() {
		return React.createElement(
			"header",
			{ className: "page__header" },
			React.createElement(
				"div",
				{ className: "container flex-container" },
				React.createElement(
					"h1",
					null,
					"Recipe Box"
				),
				React.createElement(AddButton, {
					toggleHidden: this.toggleHidden.bind(this)
				})
			),
			!this.state.isHidden && React.createElement(AddRecipe, { add: this.props.add, toggleHidden: this.toggleHidden.bind(this) })
		);
	};

	return HeaderHeader;
}(React.Component);

var AddRecipe = function (_React$Component10) {
	_inherits(AddRecipe, _React$Component10);

	function AddRecipe() {
		_classCallCheck(this, AddRecipe);

		var _this11 = _possibleConstructorReturn(this, _React$Component10.call(this));

		_this11.state = {
			error: false
		};
		return _this11;
	}

	AddRecipe.prototype.handleTitleChange = function handleTitleChange(e) {
		this.setState({ title: e.target.value });
	};

	AddRecipe.prototype.handleImageChange = function handleImageChange(e) {
		this.setState({ img: e.target.value });
	};

	AddRecipe.prototype.handleIngredientsChange = function handleIngredientsChange(e) {
		this.setState({ ingredients: e.target.value });
	};

	AddRecipe.prototype.handleInstructionsChange = function handleInstructionsChange(e) {
		this.setState({ instructions: e.target.value });
	};

	AddRecipe.prototype.handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		if (!this.state.title || !this.state.ingredients || !this.state.instructions) {
			this.error();
			return;
		}
		this.props.add(this.state.title, this.state.ingredients, this.state.instructions, this.state.img);
		this.props.toggleHidden();
	};

	AddRecipe.prototype.error = function error() {
		this.setState({ error: true });
	};

	/* closes form when overlay is clicked
  */

	AddRecipe.prototype.handleClick = function handleClick(e) {
		var formBg = document.querySelector(".form-bg");
		var isClickInside = formBg.contains(e.target);

		if (!isClickInside) {
			//the click was outside the specifiedElement, do something
			this.props.toggleHidden();
		}
	};

	AddRecipe.prototype.render = function render() {
		var error;
		if (this.state.error) {
			error = React.createElement(
				"span",
				{ className: "text-color-warning" },
				"You must complete all fields marked as required"
			);
		}
		return React.createElement(
			"div",
			{
				className: "form-bg-overlay",
				onClick: this.handleClick.bind(this)
			},
			React.createElement(
				"div",
				{ className: "form-bg" },
				React.createElement(
					"form",
					{
						className: "form",
						onSubmit: this.handleSubmit.bind(this)
					},
					React.createElement("i", {
						className: "zmdi zmdi-close zmdi-hc-2x pull-right",
						onClick: this.props.toggleHidden
					}),
					React.createElement(
						"h2",
						{ className: "form__title" },
						"Add Recipe"
					),
					React.createElement(
						"label",
						{ "for": "recipeName" },
						"Recipe name *"
					),
					React.createElement("input", {
						id: "recipeName",
						type: "text",
						onChange: this.handleTitleChange.bind(this)
					}),
					React.createElement(
						"label",
						{ "for": "recipeName" },
						"Ingredients *"
					),
					React.createElement("textarea", {
						id: "ingredients",
						onChange: this.handleIngredientsChange.bind(this)
					}),
					React.createElement(
						"label",
						{ "for": "ingredients" },
						"Instructions *"
					),
					React.createElement("textarea", {
						onChange: this.handleInstructionsChange.bind(this)
					}),
					React.createElement(
						"label",
						{ "for": "imageUrl" },
						"Image URL (optional)"
					),
					React.createElement("input", {
						id: "imageUrl",
						type: "text",
						onChange: this.handleImageChange.bind(this)
					}),
					React.createElement("input", {
						type: "submit",
						value: "add recipe",
						className: "btn-primary"
					}),
					error
				)
			)
		);
	};

	return AddRecipe;
}(React.Component);

var AddButton = function (_React$Component11) {
	_inherits(AddButton, _React$Component11);

	function AddButton() {
		_classCallCheck(this, AddButton);

		return _possibleConstructorReturn(this, _React$Component11.apply(this, arguments));
	}

	AddButton.prototype.render = function render() {
		return React.createElement(
			"button",
			{
				className: "action pull-right",
				onClick: this.props.toggleHidden
			},
			"Add recipe"
		);
	};

	return AddButton;
}(React.Component);

var Main = function (_React$Component12) {
	_inherits(Main, _React$Component12);

	function Main() {
		_classCallCheck(this, Main);

		return _possibleConstructorReturn(this, _React$Component12.apply(this, arguments));
	}

	Main.prototype.handleChangeImg = function handleChangeImg(e) {
		this.props.update({ img: e.target.value });
	};

	Main.prototype.handleChangeInstructions = function handleChangeInstructions(e) {
		// Change ingredients to html of editable elements
		var re = /(?:\r\n|\r|\n)/g;
		var str = toMarkdown(e.target.innerHTML);
		this.props.update({ instructions: str });
	};

	Main.prototype.handleChangeIngredients = function handleChangeIngredients(e) {
		// Change ingredients to html of editable elements
		var re = /(?:\r\n|\r|\n)/g;
		var str = e.target.innerText.replace(re, '\n\n');
		this.props.update({ ingredients: str });
	};

	Main.prototype.rawMarkup = function rawMarkup(text) {
		var rawMarkup = marked(text);
		return { __html: rawMarkup };
	};

	Main.prototype.render = function render() {
		var editable = this.props.editable;
		var editImg = React.createElement("input", {
			type: "text",
			onChange: this.handleChangeImg.bind(this),
			value: this.props.img
		});
		return React.createElement(
			"main",
			{
				className: "box__main"
			},
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "column six" },
					React.createElement(
						"h3",
						{ className: "box__subheading" },
						"Ingredients"
					),
					React.createElement("p", {
						className: "box__ingredients",
						contentEditable: editable ? true : false,
						onBlur: this.handleChangeIngredients.bind(this),
						dangerouslySetInnerHTML: this.rawMarkup(this.props.ingredients)
					})
				),
				React.createElement(
					"div",
					{ className: "column six" },
					React.createElement("img", {
						src: this.props.img,
						className: "box__img"
					}),
					editable && editImg
				)
			),
			React.createElement(
				"h3",
				null,
				"Instructions"
			),
			React.createElement("p", {
				className: "box__instructions",
				contentEditable: editable ? true : false,
				onBlur: this.handleChangeInstructions.bind(this),
				dangerouslySetInnerHTML: this.rawMarkup(this.props.instructions)
			})
		);
	};

	return Main;
}(React.Component);

var Header = function (_React$Component13) {
	_inherits(Header, _React$Component13);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, _React$Component13.apply(this, arguments));
	}

	Header.prototype.handleChange = function handleChange(e) {
		// Change title to html of editable elements
		this.props.update({ title: e.target.innerText });
		console.log(this.props.title);
	};

	Header.prototype.render = function render() {
		return React.createElement(
			"header",
			{
				className: "box__header"
			},
			React.createElement(
				"h2",
				{
					className: "box__title",
					contentEditable: this.props.editable ? true : false,
					onKeyPress: this.handleChange.bind(this)
				},
				this.props.title
			),
			React.createElement("i", {
				className: "zmdi zmdi-close zmdi-hc-2x pull-right",
				onClick: this.props.close
			})
		);
	};

	return Header;
}(React.Component);

var BoxFooter = function (_React$Component14) {
	_inherits(BoxFooter, _React$Component14);

	function BoxFooter() {
		_classCallCheck(this, BoxFooter);

		return _possibleConstructorReturn(this, _React$Component14.apply(this, arguments));
	}

	BoxFooter.prototype.render = function render() {
		return React.createElement(
			"footer",
			{ className: "box__footer" },
			React.createElement(
				"button",
				{
					className: "btn-warning",
					onClick: this.props.delete
				},
				React.createElement("i", { className: "zmdi zmdi-delete zmdi-hc-lg btn-icon" }),
				" Delete"
			),
			React.createElement(
				"button",
				{
					onClick: this.props.toggleEdit
				},
				React.createElement("i", { className: "zmdi zmdi-edit zmdi-hc-lg btn-icon" }),
				" Edit"
			)
		);
	};

	return BoxFooter;
}(React.Component);

var Box = function (_React$Component15) {
	_inherits(Box, _React$Component15);

	function Box() {
		_classCallCheck(this, Box);

		var _this16 = _possibleConstructorReturn(this, _React$Component15.call(this));

		_this16.state = {
			index: true,
			editable: false
		};
		return _this16;
	}

	Box.prototype.deleteRecipe = function deleteRecipe() {
		console.log(this.props);
		this.props.delete(this.props.data.key);
	};

	/* closes form when overlay is clicked
  */

	Box.prototype.handleClick = function handleClick(e) {
		var formBg = document.querySelector(".box");
		var isClickInside = formBg.contains(e.target);

		if (!isClickInside) {
			//the click was outside the specifiedElement, do something
			this.props.close();
		}
	};

	Box.prototype.updateRecipe = function updateRecipe(_ref) {
		var _ref$key = _ref.key;
		var key = _ref$key === undefined ? this.props.data.key : _ref$key;
		var _ref$title = _ref.title;
		var title = _ref$title === undefined ? this.props.data.title : _ref$title;
		var _ref$ingredients = _ref.ingredients;
		var ingredients = _ref$ingredients === undefined ? this.props.data.ingredients : _ref$ingredients;
		var _ref$instructions = _ref.instructions;
		var instructions = _ref$instructions === undefined ? this.props.data.instructions : _ref$instructions;
		var _ref$img = _ref.img;
		var img = _ref$img === undefined ? this.props.data.img : _ref$img;

		this.props.update(key, title, ingredients, instructions, img);
	};

	Box.prototype.toggleEdit = function toggleEdit() {
		console.log("thi");
		this.setState({ editable: this.state.editable ? false : true });
	};
	/* Returns box content. Uses if statements to decide if just the title should be shown 
  * passes editable state to children. If this is true, children become editable
  */

	Box.prototype.render = function render() {
		return React.createElement(
			"div",
			{
				className: "box-bg-overlay",
				onClick: this.handleClick.bind(this)
			},
			React.createElement(
				"div",
				{ className: "box" },
				React.createElement(Header, {
					title: this.props.data.title,
					editable: this.state.editable,
					update: this.updateRecipe.bind(this),
					close: this.props.close
				}),
				React.createElement(Main, {
					ingredients: this.props.data.ingredients,
					instructions: this.props.data.instructions,
					img: this.props.data.img,
					editable: this.state.editable,
					update: this.updateRecipe.bind(this)
				}),
				React.createElement(BoxFooter, {
					"delete": this.deleteRecipe.bind(this),
					toggleEdit: this.toggleEdit.bind(this)
				})
			)
		);
	};

	return Box;
}(React.Component);

var MyApp = function (_React$Component16) {
	_inherits(MyApp, _React$Component16);

	function MyApp() {
		_classCallCheck(this, MyApp);

		return _possibleConstructorReturn(this, _React$Component16.apply(this, arguments));
	}

	MyApp.prototype.render = function render() {
		return React.createElement(Layout, null);
	};

	return MyApp;
}(React.Component);

var app = document.getElementById('app');

ReactDOM.render(React.createElement(MyApp, null), app);
