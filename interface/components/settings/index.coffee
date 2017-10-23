
require "./index.styl"
Model = require "../Model"

download = ( name, type, content ) ->
  a = document.createElement "a"
  a.href = URL.createObjectURL \
    new Blob [ content ], { type }
  a.download = name

  document.body.appendChild a
  a.click()

  URL.revokeObjectURL a.href
  document.body.removeChild a

ko.components.register "tf-settings",
  template: do require "./index.pug"
  viewModel: ( params ) ->

    unless ko.isObservable params.model
      throw new TypeError "components/options:
      expects [model] to be observable"

    model = params.model() # now static

    @active = model.show_settings

    @exponents = model.exponents
    @multiplicands = model.multiplicands
    @lags = model.lags
    @timeseries = model.timeseries
    @candidates = model.candidates

    @multiplicands_max = ko.observable 0
    ko.computed ( ) =>
      active = 0
      zero = false
      ncols = model.columns().length
      for key, value of @lags() when ko.unwrap value
        active++
        zero = true if key is "0"
      unless @timeseries() and active
        @multiplicands_max ncols - 1
      else
        unless zero
          @multiplicands_max ncols * active
        else
          @multiplicands_max (ncols - 1) * active + active - 1
      unless @multiplicands.peek() <= @multiplicands_max()
        @multiplicands @multiplicands_max()


    @timeseries.subscribe ( next ) =>
      @lags { 0: true } unless next

    @active.subscribe ( next ) ->
      if next then adapter.unsubscribeToChanges()
      else adapter.subscribeToChanges()

    @download_model = ( ) ->
      model = params.model()
      download (model.id() or "model") + ".tf",
        "application/json", model.out()

    @clear_project = ( ) ->
      @clear_settings()
      params.model null
      adapter.reset()

    @clear_model = ( ) ->
      model.result_fit(null)
      model.show_settings(false)
      adapter.clear()
      adapter.addTerm([[0, 0, 0]])

    @clear_settings = ( ) ->
      model.exponents({1: true})
      model.multiplicands(1)
      model.lags({0: true})
      model.timeseries(false)
      ko.precision(5)
      # Clear the selected stats to the default
      allstats().forEach((stat) => stat.selected(stat.default))

    return this
