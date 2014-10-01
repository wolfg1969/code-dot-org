class Playlab < Maze
  serialized_attrs %w(
    first_sprite_index
    scale
    goal
    timeout_failure_tick
  )

  def self.create_from_level_builder(params, level_params)
    level = new(level_params.merge(user: params[:user], game: Game.custom_playlab, level_num: 'custom'))
    level.create_maze(level_params, params)
    level
  end

  # List of possible skins, the first is used as a default.
  def self.skins
    []
  end
end
