import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import ComponentsModule from './components/components';
import ServicesModule from './services/services';
import { AppComponent } from './app.component';

const appModule = angular
	.module('appModule', [
		'ngAnimate',
		'ngAria',
		'ngMessages',
		'ngMaterial',
		ComponentsModule,
		ServicesModule,
	])
	.config([
		'$mdThemingProvider',
		($mdThemingProvider) => {
			$mdThemingProvider
				.theme('default')
				.primaryPalette('brown')
				.accentPalette('amber');
		},
	])

	.component('app', AppComponent);

appModule.service('AnimeSearchService', function ($http) {
	this.searchAnimeByImage = function(imageUrl) {
		const apiUrl = `https://api.trace.moe/search?url=${encodeURIComponent(
			imageUrl
		)}`;
		return $http.get(apiUrl).then((response) => response.data);
	};
});

appModule.controller('animeSearchController', ($scope, AnimeSearchService) => {
	$scope.placeholder = 'Enter image URL';

	// const response = fetch(
	// 	`https://api.trace.moe/search?url=${encodeURIComponent(
	// 		"https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg"
	// 	)}`
	// ).then((e) => e.json());
	const imageUrl = 'https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg'; // Example image URL
	AnimeSearchService.searchAnimeByImage(imageUrl)
		.then((data) => {
			$scope.searchResults = data; // Assign search results to scope variable
			console.log($scope.searchResults.result);
		})
		.catch((error) => {
			console.error('Error searching anime:', error);
		});
});

export default appModule;
