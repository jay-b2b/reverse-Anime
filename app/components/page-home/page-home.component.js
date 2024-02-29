import controller from './page-home.controller';
import './page-home.scss';

const pageHomeComponent = {
	bindings: {},
	template: `
		<md-content class="page-home">
		<div ng-controller="animeSearchController">
		<input ng-model="imageUrl" placeholder={{placeholder}}>
		
			<div ng-if="searchResults">
       			 <pre>{{ searchResults | json }}</pre> <!-- Display search results -->
    		</div>

		</div>
			
		</md-content>
	`,
	controller,
};

export default pageHomeComponent;
