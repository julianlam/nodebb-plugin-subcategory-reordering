<form role="form" class="subcategory-reordering-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">Reordering</div>
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				Enable automatic subcategory re-ordering here. If a new post or topic is made to a subcategory of a
				category that has re-ordering enabled, it will be bumped to the top of the subcategory order.
			</p>
			<!-- BEGIN categories -->
			<div class="checkbox">
				<label for="cid:{../cid}:enabled" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
					<input type="checkbox" class="mdl-switch__input" id="cid:{../cid}:enabled" name="cid:{../cid}:enabled" />
					<span class="mdl-switch__label">{../name}</span>
				</label>
			</div>
			<!-- END categories -->
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>