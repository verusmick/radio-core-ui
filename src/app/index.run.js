(function() {
  'use strict';

  angular
    .module('radioCoreUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
