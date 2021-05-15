# frozen_string_literal: true

require 'autotest/cucumber_mixin'
require 'autotest/rails_rspec'

class Autotest::CucumberRailsRspec < Autotest::RailsRspec
  include CucumberMixin
end
