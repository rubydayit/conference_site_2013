ConferenceSite2013::App.controllers :root do
  get :index, map: '/' do
    @sponsors = Sponsor.all
    render 'root/index'
  end
end
