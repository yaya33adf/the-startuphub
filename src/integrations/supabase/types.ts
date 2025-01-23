export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          attendees: string[] | null
          created_at: string | null
          description: string | null
          end_time: string
          id: string
          location: string | null
          start_time: string
          status: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          attendees?: string[] | null
          created_at?: string | null
          description?: string | null
          end_time: string
          id?: string
          location?: string | null
          start_time: string
          status?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          attendees?: string[] | null
          created_at?: string | null
          description?: string | null
          end_time?: string
          id?: string
          location?: string | null
          start_time?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          category: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          id: string
          image_url: string | null
          read_time: string | null
          status: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          read_time?: string | null
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          read_time?: string | null
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_identities: {
        Row: {
          brand_name: string
          created_at: string
          font_family: string | null
          id: string
          logo_url: string | null
          primary_color: string | null
          tagline: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          brand_name: string
          created_at?: string
          font_family?: string | null
          id?: string
          logo_url?: string | null
          primary_color?: string | null
          tagline?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          brand_name?: string
          created_at?: string
          font_family?: string | null
          id?: string
          logo_url?: string | null
          primary_color?: string | null
          tagline?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      community_posts: {
        Row: {
          author_id: string | null
          comments: number | null
          content: string
          created_at: string | null
          id: string
          likes: number | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          comments?: number | null
          content: string
          created_at?: string | null
          id?: string
          likes?: number | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          comments?: number | null
          content?: string
          created_at?: string | null
          id?: string
          likes?: number | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      crowdfunding_companies: {
        Row: {
          category: string | null
          created_at: string | null
          current_funding: number | null
          description: string | null
          end_date: string | null
          funding_goal: number | null
          id: string
          launch_date: string | null
          logo_url: string | null
          name: string
          score: number | null
          status: string | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          current_funding?: number | null
          description?: string | null
          end_date?: string | null
          funding_goal?: number | null
          id?: string
          launch_date?: string | null
          logo_url?: string | null
          name: string
          score?: number | null
          status?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          current_funding?: number | null
          description?: string | null
          end_date?: string | null
          funding_goal?: number | null
          id?: string
          launch_date?: string | null
          logo_url?: string | null
          name?: string
          score?: number | null
          status?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          date: string
          description: string | null
          id: string
          location: string | null
          organizer_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          description?: string | null
          id?: string
          location?: string | null
          organizer_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          description?: string | null
          id?: string
          location?: string | null
          organizer_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string | null
          date: string
          description: string
          id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          category: string
          created_at?: string | null
          date?: string
          description: string
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string | null
          date?: string
          description?: string
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          comment_text: string | null
          created_at: string | null
          feedback_text: string
          id: string
          idea_description: string
          idea_title: string
          rating: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment_text?: string | null
          created_at?: string | null
          feedback_text: string
          id?: string
          idea_description: string
          idea_title: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment_text?: string | null
          created_at?: string | null
          feedback_text?: string
          id?: string
          idea_description?: string
          idea_title?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      freelancer_jobs: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      goals: {
        Row: {
          completed: boolean | null
          created_at: string | null
          id: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      job_postings: {
        Row: {
          budget: number
          category: string
          country: string
          created_at: string
          description: string
          estimated_time: string
          id: string
          poster_name: string
          title: string
          updated_at: string
        }
        Insert: {
          budget: number
          category: string
          country: string
          created_at?: string
          description: string
          estimated_time: string
          id?: string
          poster_name: string
          title: string
          updated_at?: string
        }
        Update: {
          budget?: number
          category?: string
          country?: string
          created_at?: string
          description?: string
          estimated_time?: string
          id?: string
          poster_name?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      job_skills: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          job_id: string | null
          order_index: number
          skill_level: string
          skill_name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          job_id?: string | null
          order_index: number
          skill_level: string
          skill_name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          job_id?: string | null
          order_index?: number
          skill_level?: string
          skill_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_skills_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "freelancer_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          content: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      problems: {
        Row: {
          created_at: string | null
          description: string
          id: string
          role: string
          role_category: string
          status: string | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          role: string
          role_category: string
          status?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          role?: string
          role_category?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          certificates: Json | null
          company: string | null
          country: string | null
          courses: Json | null
          created_at: string | null
          email: string | null
          id: string
          image_url: string | null
          investment_stage: string | null
          languages: string[] | null
          name: string | null
          previous_work: string | null
          role: string | null
          skills: string[] | null
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          certificates?: Json | null
          company?: string | null
          country?: string | null
          courses?: Json | null
          created_at?: string | null
          email?: string | null
          id: string
          image_url?: string | null
          investment_stage?: string | null
          languages?: string[] | null
          name?: string | null
          previous_work?: string | null
          role?: string | null
          skills?: string[] | null
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          certificates?: Json | null
          company?: string | null
          country?: string | null
          courses?: Json | null
          created_at?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          investment_stage?: string | null
          languages?: string[] | null
          name?: string | null
          previous_work?: string | null
          role?: string | null
          skills?: string[] | null
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: []
      }
      roadmap_sections: {
        Row: {
          created_at: string | null
          id: string
          order_index: number
          roadmap_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_index: number
          roadmap_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          order_index?: number
          roadmap_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roadmap_sections_roadmap_id_fkey"
            columns: ["roadmap_id"]
            isOneToOne: false
            referencedRelation: "roadmap_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      roadmap_steps: {
        Row: {
          created_at: string | null
          description: string
          id: string
          order_index: number
          resources: Json | null
          section_id: string
          skills: string[] | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          order_index: number
          resources?: Json | null
          section_id: string
          skills?: string[] | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          order_index?: number
          resources?: Json | null
          section_id?: string
          skills?: string[] | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roadmap_steps_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "roadmap_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      roadmap_templates: {
        Row: {
          created_at: string | null
          description: string
          id: string
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      schedule_calls: {
        Row: {
          additional_info: string | null
          company_name: string | null
          created_at: string | null
          email: string
          first_name: string
          id: string
          investment_preferences: string[] | null
          investment_range: string
          investor_type: string
          last_name: string
          phone: string
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          additional_info?: string | null
          company_name?: string | null
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          investment_preferences?: string[] | null
          investment_range: string
          investor_type: string
          last_name: string
          phone: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          additional_info?: string | null
          company_name?: string | null
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          investment_preferences?: string[] | null
          investment_range?: string
          investor_type?: string
          last_name?: string
          phone?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      side_hustles: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          difficulty: string | null
          id: string
          monthly_earnings_max: number | null
          monthly_earnings_min: number | null
          name: string
          platforms: string[] | null
          skills: string[] | null
          time_commitment: string | null
          trend_score: number | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          monthly_earnings_max?: number | null
          monthly_earnings_min?: number | null
          name: string
          platforms?: string[] | null
          skills?: string[] | null
          time_commitment?: string | null
          trend_score?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          monthly_earnings_max?: number | null
          monthly_earnings_min?: number | null
          name?: string
          platforms?: string[] | null
          skills?: string[] | null
          time_commitment?: string | null
          trend_score?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          id: string
          key: string
          updated_at: string | null
          value: Json
        }
        Insert: {
          id?: string
          key: string
          updated_at?: string | null
          value: Json
        }
        Update: {
          id?: string
          key?: string
          updated_at?: string | null
          value?: Json
        }
        Relationships: []
      }
      skill_resources: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          skill_id: string | null
          title: string
          type: string
          url: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          skill_id?: string | null
          title: string
          type: string
          url: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          skill_id?: string | null
          title?: string
          type?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "skill_resources_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "job_skills"
            referencedColumns: ["id"]
          },
        ]
      }
      startup_ratings: {
        Row: {
          created_at: string | null
          id: string
          rating: number
          startup_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          rating: number
          startup_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          rating?: number
          startup_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "startup_ratings_startup_id_fkey"
            columns: ["startup_id"]
            isOneToOne: false
            referencedRelation: "startups"
            referencedColumns: ["id"]
          },
        ]
      }
      startups: {
        Row: {
          category: string | null
          created_at: string | null
          description: string
          funding_amount: number | null
          funding_type: string | null
          hyper_email: string | null
          id: string
          name: string
          rating: number | null
          total_ratings: number | null
          updated_at: string | null
          user_id: string | null
          website_url: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description: string
          funding_amount?: number | null
          funding_type?: string | null
          hyper_email?: string | null
          id?: string
          name: string
          rating?: number | null
          total_ratings?: number | null
          updated_at?: string | null
          user_id?: string | null
          website_url?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string
          funding_amount?: number | null
          funding_type?: string | null
          hyper_email?: string | null
          id?: string
          name?: string
          rating?: number | null
          total_ratings?: number | null
          updated_at?: string | null
          user_id?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      team_recommendations: {
        Row: {
          budget_range: string | null
          created_at: string | null
          id: string
          project_description: string | null
          project_name: string
          project_size: string
          project_type: string
          recommended_roles: Json | null
          timeline: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          budget_range?: string | null
          created_at?: string | null
          id?: string
          project_description?: string | null
          project_name: string
          project_size: string
          project_type: string
          recommended_roles?: Json | null
          timeline?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          budget_range?: string | null
          created_at?: string | null
          id?: string
          project_description?: string | null
          project_name?: string
          project_size?: string
          project_type?: string
          recommended_roles?: Json | null
          timeline?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          assignment: string | null
          created_at: string | null
          due_date: string | null
          email: string
          id: string
          member_name: string
          role: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          assignment?: string | null
          created_at?: string | null
          due_date?: string | null
          email: string
          id?: string
          member_name: string
          role: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          assignment?: string | null
          created_at?: string | null
          due_date?: string | null
          email?: string
          id?: string
          member_name?: string
          role?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      trend_scores: {
        Row: {
          created_at: string | null
          github_score: number | null
          google_trends_score: number | null
          id: string
          metadata: Json | null
          product_hunt_score: number | null
          query: string
          reddit_score: number | null
          total_score: number | null
          twitter_score: number | null
          updated_at: string | null
          wikipedia_score: number | null
        }
        Insert: {
          created_at?: string | null
          github_score?: number | null
          google_trends_score?: number | null
          id?: string
          metadata?: Json | null
          product_hunt_score?: number | null
          query: string
          reddit_score?: number | null
          total_score?: number | null
          twitter_score?: number | null
          updated_at?: string | null
          wikipedia_score?: number | null
        }
        Update: {
          created_at?: string | null
          github_score?: number | null
          google_trends_score?: number | null
          id?: string
          metadata?: Json | null
          product_hunt_score?: number | null
          query?: string
          reddit_score?: number | null
          total_score?: number | null
          twitter_score?: number | null
          updated_at?: string | null
          wikipedia_score?: number | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name: string
          role?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
