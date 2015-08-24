class Task < ActiveRecord::Base
  after_initialize :init

  def init
    self.content ||=  "null"
    self.completed ||= false
  end

end
