import { NavigationActions, StackActions } from 'react-navigation';
let navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params
		})
	);
}

function reset(route, params) {
	const resetAction = StackActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({
				routeName: route,
				params: params
			})
		]
	});
	navigator.dispatch(resetAction);
}

function getCurrentRoute() {
	let route = _navigator.state.nav;
	while (route.routes) {
		route = route.routes[route.index];
	}
	return route;
}

// add other navigation functions that you need and export them
function restack(routes = [], index = 0) {
	let routeStack = routes.map((obj) => NavigationActions.navigate({ routeName: obj.route, params: obj.params }));
	let resetAction = StackActions.reset({
		index: index,
		actions: routeStack
	});
	navigator.dispatch(resetAction);
}

function pop(n = 1) {
	let popAction = StackActions.pop({
		n: n
	});
	navigator.dispatch(popAction);
}

function popToTop(){
  navigator.dispatch(StackActions.popToTop());

}
export default {
  navigate,
  reset,
  setTopLevelNavigator,
  getCurrentRoute,
  restack,
  pop,
  popToTop
};