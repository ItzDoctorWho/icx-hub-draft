import axios from "axios";
const fetchOpportunities = async ({
  setOpportunities,
  setLoading,
  setError,
}) => {
  const url =
    "https://gis-api.aiesec.org/graphql?access_token=f5b22485888f72fd4d26b850adea0e6de9e371ad9d8d5169dc47f6fc3696920f";

  const query = `
query Opportunities($page: Int, $count: Int, $applicant_count: Boolean!, $close_date: Boolean!, $created_at: Boolean!, $opened_at: Boolean!, $earliest_start_date: Boolean!, $latest_end_date: Boolean!, $lc: Boolean!, $tags: Boolean!, $mc: Boolean!, $managers: Boolean!, $gep: Boolean!, $product: Boolean!, $status: Boolean!, $title: Boolean!, $openings: Boolean!, $sub_product: Boolean!, $last_updated: Boolean!, $duration: Boolean!, $languages: Boolean!, $organization_type: Boolean!, $backgrounds: Boolean!, $filters: OpportunityFilter, $q: String, $sort: String) {
  allOpportunity(
    page: $page
    per_page: $count
    q: $q
    filters: $filters
    sort: $sort
  ) {
    ...OpportunitesList
    __typename
  }
}

fragment OpportunitesList on OpportunityList {
  data {
    id
    title @include(if: $title)
    cover_photo
    branch {
      name
      company {
        id
        name
        organisation_type {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    status @include(if: $status)
    applicants_count @include(if: $applicant_count)
    managers @include(if: $managers) {
      id
      profile_photo
      full_name
      aiesec_email
      email
      __typename
    }
    experience_type
    applications_close_date @include(if: $close_date)
    earliest_start_date @include(if: $earliest_start_date)
    programmes {
      id
      short_name_display
      short_name @include(if: $product)
      __typename
    }
    sub_product @include(if: $sub_product) {
      id
      name
      programme {
        id
        short_name_display
        __typename
      }
      __typename
    }
    opportunity_duration_type {
      duration_type
      __typename
    }
    duration @include(if: $duration)
    languages @include(if: $languages) {
      id
      constant_name
      __typename
    }
    backgrounds @include(if: $backgrounds) {
      id
      constant_name
      __typename
    }
    updated_at @include(if: $last_updated)
    organisation @include(if: $organization_type) {
      id
      organisation_type {
        id
        name
        __typename
      }
      __typename
    }
    sdg_info {
      id
      sdg_target {
        id
        target
        target_id
        parent {
          id
          sdg_goal_no
          short_name
          __typename
        }
        __typename
      }
      __typename
    }
    is_gep @include(if: $gep)
    home_lc @include(if: $lc) {
      name
      __typename
    }
    tag_lists @include(if: $tags) {
      id
      name
      __typename
    }
    permissions {
      can_update
      __typename
    }
    home_mc @include(if: $mc) {
      name
      __typename
    }
    created_at @include(if: $created_at)
    meta {
      created_via
      __typename
    }
    date_opened @include(if: $opened_at)
    latest_end_date @include(if: $latest_end_date)
    openings @include(if: $openings)
    __typename
  }
  paging {
    total_pages
    current_page
    total_items
    __typename
  }
  __typename
}

  `;

  const variables = {
    page: 1,
    count: 30,
    filters: {
      statuses: ["open"], // Ensure 'statuses' is an array of strings if the GraphQL API expects it
    },
    q: "",
    id: true,
    title: true,
    organization: true,
    status: true,
    opportunity_type: false,
    managers: true,
    applicant_count: true,
    close_date: false,
    earliest_start_date: false,
    latest_end_date: false,
    duration: true,
    lc: false,
    mc: false,
    created_at: false,
    created_via: false,
    gep: false,
    languages: false,
    backgrounds: true,
    branch: false,
    product: false,
    sub_product: false,
    last_updated: false,
    organization_type: false,
    sdg: false,
    sdg_target: false,
    opened_at: false,
    openings: true,
    tags: false,
    duration_type: false,
    sort: "", // Assuming you want no sorting; otherwise, provide a valid sorting key
  };

  try {
    const response = await axios.post(url, {
      query,
      variables,
    });
    const data = response.data.data?.allOpportunity?.data || [];
    setOpportunities(data);
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    setError(error.response?.data?.message || "Failed to fetch opportunities.");
  } finally {
    setLoading(false);
  }
};

export default fetchOpportunities;
