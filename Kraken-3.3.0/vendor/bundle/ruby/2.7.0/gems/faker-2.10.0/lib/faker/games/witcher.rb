# frozen_string_literal: true

module Faker
  class Games
    class Witcher < Base
      class << self
        ##
        # Produces the name of a character from The Witcher.
        #
        # @return [String]
        #
        # @example
        #   Faker::Games::Witcher.character #=> "Triss Merigold"
        #
        # @faker.version 1.8.3
        def character
          fetch('games.witcher.characters')
        end

        ##
        # Produces the name of a witcher from The Witcher.
        #
        # @return [String]
        #
        # @example
        #   Faker::Games::Witcher.witcher #=> "Geralt of Rivia"
        #
        # @faker.version 1.8.3
        def witcher
          fetch('games.witcher.witchers')
        end

        ##
        # Produces the name of a school from The Witcher.
        #
        # @return [String]
        #
        # @example
        #   Faker::Games::Witcher.school #=> "Wolf"
        #
        # @faker.version 1.8.3
        def school
          fetch('games.witcher.schools')
        end

        ##
        # Produces the name of a location from The Witcher.
        #
        # @return [String]
        #
        # @example
        #   Faker::Games::Witcher.location #=> "Novigrad"
        #
        # @faker.version 1.8.3
        def location
          fetch('games.witcher.locations')
        end

        ##
        # Produces a quote from The Witcher.
        #
        # @return [String]
        #
        # @example
        #   Faker::Games::Witcher.quote #=> "No Lollygagin'!"
        #
        # @faker.version 1.8.3
        def quote
          fetch('games.witcher.quotes')
        end

        ##
        # Produces the name of a monster from The Witcher.
        #
        # @return [String]
        #
        # @example
        #   Faker::Games::Witcher.monster #=> "Katakan"
        #
        # @faker.version 1.8.3
        def monster
          fetch('games.witcher.monsters')
        end
      end
    end
  end
end
